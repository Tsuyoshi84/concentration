import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GAME_DIFFICULTY } from '../constants/game-difficulty';
import type { Difficulty } from '../types';
import { CardArtComponent } from './card-art.component';
import { TopButtonComponent } from './top-button.component';
import { TopTitleComponent } from './top-title.component';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
  imports: [TopTitleComponent, TopButtonComponent, CardArtComponent],
})
export class TopComponent {
  private readonly router = inject(Router);

  /** List of difficulties that user can select from */
  readonly difficulties: readonly Difficulty[] = GAME_DIFFICULTY;
  /** Number of cards selected by a user */
  numOfCard = 0;

  /**
   * Notify parent component that starting the game.
   */
  start(diff: Difficulty): void {
    this.router.navigate(['game', diff.level]);
  }
}
