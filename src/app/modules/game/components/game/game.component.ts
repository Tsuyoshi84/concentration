import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  OnDestroy,
  OnInit,
  Signal,
  ViewChild,
  WritableSignal,
  effect,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlipResultComponent } from '../../components/flip-result/flip-result.component';
import { GAME_DIFFICULTY } from '../../constants/game-difficulty';
import { GameService } from '../../services/game/game.service';
import type { Card, GameStatus } from '../../types';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
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

  level: number;
  /** Number of try */
  numOfTry: WritableSignal<number>;
  /** Game status */
  gameStatus: WritableSignal<GameStatus>;
  /** Cards used for the game */
  cards: WritableSignal<readonly Card[]>;
  isGameClear: Signal<boolean>;
  /** Indicate if a user can flip cards  */
  canFlip: Signal<boolean>;

  constructor(
    private gameService: GameService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.level = 1;
    this.numOfTry = this.gameService.numOfTry;
    this.gameStatus = this.gameService.gameStatus;
    this.cards = this.gameService.cards;
    this.isGameClear = this.gameService.isGameClear;
    this.canFlip = this.gameService.canFlip;

    effect(() => {
      const result = this.gameService.flippedResult();
      if (['Correct', 'Wrong', 'Finish'].includes(result)) {
        this.flipResult.showResult(result);
      }
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.level = Number(params.get('level'));
    });

    this.setupGame();
  }

  ngOnDestroy(): void {
    this.gameService.reset();
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
  async onCardClicked(card: Card): Promise<void> {
    if (!this.canFlip()) return;

    await this.gameService.flipCard(card);
  }

  setupGame() {
    const difficulty = GAME_DIFFICULTY.find((d) => d.level === this.level);
    if (difficulty === undefined) return;

    this.gameService.startGame(difficulty.num);
  }

  back() {
    this.router.navigate(['']);
  }

  replay() {
    this.setupGame();
  }
}
