import { Component, Input } from '@angular/core';
import { GameStatus } from '../../enums/game-status.enum';

@Component({
  selector: 'app-game-progress',
  templateUrl: './game-progress.component.html',
  styleUrls: ['./game-progress.component.sass'],
})
export class GameProgressComponent {
  @Input() numOfTry!: number;
  @Input() gameStatus!: GameStatus;
}
