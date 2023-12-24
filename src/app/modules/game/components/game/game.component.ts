import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FlipResultComponent } from '../../components/flip-result/flip-result.component';
import gameDifficulty from '../../constants/game-difficulty';
import { GameStatus } from '../../enums/game-status.enum';
import { Card } from '../../models/card';
import { GameService } from '../../services/game/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass'],
  animations: [
    trigger('switchView', [
      transition(':enter', [
        style({ transform: 'translateY(20%)', opacity: 0 }),
        animate('200ms', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('200ms', style({ transform: 'translateY(-20%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class GameComponent implements OnInit, OnDestroy {
  @ViewChild(FlipResultComponent, { static: true })
  flipResult!: FlipResultComponent;

  /** Store GameStatus enum to a variable so that it can be accessed from the view */
  readonly GameStatus = GameStatus;

  /** Number of try */
  numOfTry = 0;
  /** Number of cheating */
  numOfCheating = 0;
  /** Game status */
  gameStatus!: GameStatus;
  /** Cards used for the game */
  cards: Card[] = [];
  /** Indicate if a user can flip cards  */
  canFlip = false;
  sub: Subscription | undefined;

  constructor(
    private gameService: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.setupGame();
  }

  ngOnDestroy(): void {
    this.gameService.reset();
    this.initializeConditions();
  }

  /**
   * Handler that is called when resetting the game.
   */
  onRestarted(): void {
    this.router.navigate(['']);
  }

  /**
   * Handler that is called when a user clicked a card.
   *
   * @param card Flipped card.
   */
  onCardClicked(card: Card): void {
    if (!this.canFlip) {
      return;
    }

    // If the given card is not flipped, flip it
    this.canFlip = false;
    this.gameService.flipCard(card).subscribe(
      ({ result, tryCount, gameStatus }) => {
        this.numOfTry = tryCount;
        this.gameStatus = gameStatus;

        if (result) {
          this.flipResult.showResult(result);
        }
      },
      (e) => console.error(e),
      () => (this.canFlip = true)
    );
  }

  setupGame() {
    this.sub = this.route.params.subscribe((params) => {
      const level = +params['level'];
      const difficulty = gameDifficulty.find((d) => d.level === level);

      if (difficulty === undefined) return;

      this.canFlip = true;
      this.gameStatus = this.gameService.getGameStatus();
      this.initializeConditions();

      this.cards = this.gameService.startGame(difficulty.num);
      this.gameStatus = this.gameService.getGameStatus();
    });
  }

  back() {
    this.router.navigate(['']);
  }

  replay() {
    this.setupGame();
  }

  /**
   * Flip all the un-flipped card.
   */
  cheat(): void {
    if (!this.canFlip) {
      return;
    }

    this.canFlip = false;
    this.gameService.cheat().subscribe(
      (cheatedCount) => {
        this.numOfCheating = cheatedCount;
      },
      (e) => console.error(e),
      () => (this.canFlip = true)
    );
  }

  get isGameClear(): boolean {
    return this.gameStatus === GameStatus.Clear;
  }

  /**
   * Initialize game conditions.
   */
  private initializeConditions(): void {
    this.numOfTry = 0;
    this.numOfCheating = 0;
  }
}
