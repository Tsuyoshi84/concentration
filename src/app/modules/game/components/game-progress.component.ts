import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { GameStatus } from '../types';

@Component({
  selector: 'app-game-progress',
  templateUrl: './game-progress.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./game-progress.component.css'],
})
export class GameProgressComponent {
  readonly numOfTry = input.required<number>();
  readonly gameStatus = input.required<GameStatus>();
}
