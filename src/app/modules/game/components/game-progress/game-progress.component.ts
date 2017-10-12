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
  isFinished: boolean;

  constructor() { }

  ngOnInit() {
    this.updateView();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.gameStatus && changes.gameStatus.currentValue) {
      this.updateView();
    }
  }

  /**
   * Notify to the parent component restarting the game.
   */
  restart(): void {
    this.restarted.emit();
  }

  private updateView(): void {
    if (this.gameStatus === GameStatus.Clear) {
      this.isFinished = true;
      this.restartBtnLabel = 'Play again';
    } else {
      this.isFinished = false;
      this.restartBtnLabel = 'Restart';
    }
  }

}
