import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import type { GameStatus } from '../types';

@Component({
  selector: 'app-game-progress',
  templateUrl: './game-progress.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./game-progress.component.css'],
})
export class GameProgressComponent {
  @Input() numOfTry!: number;
  @Input() gameStatus!: GameStatus;
}
