import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  numberAttribute,
  type OnDestroy,
  type Signal,
  type WritableSignal,
} from '@angular/core';
import { Router } from '@angular/router';
import { GAME_DIFFICULTY } from '../constants/game-difficulty';
import { GameService } from '../services/game.service';
import type { Card, GameStatus, Result } from '../types';
import { CardListComponent } from './card-list.component';
import { FlipResultComponent } from './flip-result.component';
import { GameProgressComponent } from './game-progress.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [GameProgressComponent, FlipResultComponent, CardListComponent],
})
export class GameComponent implements OnDestroy {
  private readonly gameService = inject(GameService);
  private readonly router = inject(Router);

  /** Difficulty level from the `:level` route param */
  readonly level = input.required({ transform: numberAttribute });

  /** Number of try */
  readonly numOfTry: WritableSignal<number> = this.gameService.numOfTry;
  /** Game status */
  readonly gameStatus: WritableSignal<GameStatus> = this.gameService.gameStatus;
  /** Cards used for the game */
  readonly cards: WritableSignal<readonly Card[]> = this.gameService.cards;
  readonly isGameClear: Signal<boolean> = this.gameService.isGameClear;
  /** Indicate if a user can flip cards  */
  readonly canFlip: Signal<boolean> = this.gameService.canFlip;
  /** Card flip feedback result */
  readonly flippedResult: WritableSignal<Result> =
    this.gameService.flippedResult;

  constructor() {
    effect(() => {
      this.level();
      this.setupGame();
    });
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
    const difficulty = GAME_DIFFICULTY.find((d) => d.level === this.level());
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
