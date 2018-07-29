import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.sass']
})
export class GameControllerComponent implements OnInit {
  @Output() started = new EventEmitter<number>();
  /** List of difficulties that user can select from */
  difficulties: { label: string; num: number }[];
  /** Number of cards selected by a user */
  numOfCard: number;

  constructor() {}

  ngOnInit() {
    this.difficulties = [
      { label: 'やさしい😀', num: 8 },
      { label: 'ふつう🙂', num: 16 },
      { label: 'むずかしい🙁', num: 32 },
      { label: 'げろむず🤮', num: 50 }
    ];

    this.numOfCard = this.difficulties[2].num;
  }

  /**
   * Notify parent component that starting the game.
   */
  start(): void {
    this.started.emit(this.numOfCard);
  }
}
