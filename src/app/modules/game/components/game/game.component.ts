import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'co-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass'],
})
export class GameComponent implements OnInit {
  cardCount: number;

  constructor() { }

  ngOnInit() {
    // TODO: Change the fixed number
    this.cardCount = 16;
  }

}
