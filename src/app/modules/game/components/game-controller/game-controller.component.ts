import { Component, OnInit, Output, EventEmitter } from '@angular/core';

interface Difficulty {
  label: string;
  num: number;
}

@Component({
  selector: 'co-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.sass']
})
export class GameControllerComponent implements OnInit {
  @Output()
  started = new EventEmitter<number>();
  /** List of difficulties that user can select from */
  difficulties: Difficulty[];
  /** Number of cards selected by a user */
  numOfCard: number;

  constructor() {}

  ngOnInit() {
    this.difficulties = [
      { label: 'やさしい😀', num: 8 },
      { label: 'ふつう🙂', num: 16 },
      { label: 'むずかしい🙁', num: 30 },
      { label: 'げろむず🤮', num: 54 }
    ];

    this.numOfCard = this.difficulties[1].num;
  }

  /**
   * Notify parent component that starting the game.
   */
  start(diff: Difficulty): void {
    this.numOfCard = diff.num;
    this.started.emit(this.numOfCard);
  }
}
