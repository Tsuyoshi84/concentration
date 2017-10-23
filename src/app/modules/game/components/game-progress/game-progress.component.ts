import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { GameStatus } from '../../enums/game-status.enum';

@Component({
  selector: 'co-game-progress',
  templateUrl: './game-progress.component.html',
  styleUrls: ['./game-progress.component.sass']
})
export class GameProgressComponent implements OnInit, OnChanges {
  @Input() numOfFlipping: number;
  @Input() numOfCheating: number;
  @Input() gameStatus: GameStatus;
  @Output() restarted = new EventEmitter();
  restartBtnLabel: string;

  constructor() { }

  ngOnInit() {
    this.updateView(this.gameStatus);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.gameStatus && typeof changes.gameStatus.currentValue === 'number') {
      this.updateView(changes.gameStatus.currentValue);
    }
  }

  /**
   * Notify to the parent component restarting the game.
   */
  restart(): void {
    this.restarted.emit();
  }

  /**
   * Change each variable values to update the view based on the game status.
   *
   * @param gameStatus Game status.
   */
  private updateView(gameStatus: GameStatus): void {
    if (gameStatus === GameStatus.Clear) {
      this.restartBtnLabel = 'Play again';
    } else {
      this.restartBtnLabel = 'Restart';
    }
  }

}
