import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'co-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.sass']
})
export class GameControllerComponent implements OnInit {
  @Output() started = new EventEmitter<number>();
  /** List of difficulties that user can select from */
  difficulties: { label: string, num: number }[];
  /** Number of cards selected by a user */
  numOfCard: number;

  constructor() { }

  ngOnInit() {
    // TODO: It might be better to pass difficulty array from GameService...
    this.difficulties = [
      { label: 'Super Easy', num: 4 },
      { label: 'Easy', num: 8 },
      { label: 'Normal', num: 16 },
      { label: 'Hard', num: 32 },
      { label: 'Super Hard', num: 64 },
      { label: 'Insane', num: 128 },
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
