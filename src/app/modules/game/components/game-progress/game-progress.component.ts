import { Component, OnInit, Input } from '@angular/core';
import { GameStatus } from '../../enums/game-status.enum';

@Component({
  selector: 'co-game-progress',
  templateUrl: './game-progress.component.html',
  styleUrls: ['./game-progress.component.sass'],
})
export class GameProgressComponent implements OnInit {
  @Input() numOfTry!: number;
  @Input() gameStatus!: GameStatus;

  ngOnInit() {}
}
