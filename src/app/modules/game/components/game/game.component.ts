import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

import { Card } from '../../models/card';
import { GameService } from '../../services/game/game.service';
import { FlipResultComponent } from '../../components/flip-result/flip-result.component';
import { GameStatus } from '../../enums/game-status.enum';
import { Router, ActivatedRoute } from '@angular/router';
import gameDifficulty from '../../constants/game-difficulty';

@Component({
  selector: 'co-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass'],
  animations: [
    trigger('switchView', [
      transition(':enter', [
        style({ transform: 'translateY(20%)', opacity: 0 }),
        animate('200ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('200ms', style({ transform: 'translateY(-20%)', opacity: 0 }))
      ])
    ])
  ]
})
export class GameComponent implements OnInit, OnDestroy {
  @ViewChild(FlipResultComponent)
  flipResult: FlipResultComponent;

  /** Store GameStatus enum to a variable so that it can be accessed from the view */
  readonly GameStatus = GameStatus;

  /** Number of try */
  numOfTry: number;
  /** Number of cheating */
  numOfCheating: number;
  /** Game status */
  gameStatus: GameStatus;
  /** Cards used for the game */
  cards: Card[] = [];
  /** Indicate if a user can flip cards  */
  canFlip: boolean;
  sub: any;

  constructor(
    private gameService: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.canFlip = true;
      this.gameStatus = this.gameService.getGameStatus();
      this.initializeConditions();
      const level = +params['level'];
      const difficulty = gameDifficulty.find(d => d.level === level);
      this.cards = this.gameService.startGame(difficulty.num);
      this.gameStatus = this.gameService.getGameStatus();
    });
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
      e => console.error(e),
      () => (this.canFlip = true)
    );
  }

  /**
   * Flip all the unflipped card.
   */
  cheat(): void {
    if (!this.canFlip) {
      return;
    }

    this.canFlip = false;
    this.gameService.cheat().subscribe(
      cheatedCount => {
        this.numOfCheating = cheatedCount;
      },
      e => console.error(e),
      () => (this.canFlip = true)
    );
  }

  /**
   * Initialize game conditions.
   */
  private initializeConditions(): void {
    this.numOfTry = 0;
    this.numOfCheating = 0;
  }
}
