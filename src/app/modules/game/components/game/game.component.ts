import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { GameService } from '../../services/game/game.service';

@Component({
  selector: 'co-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass'],
})
export class GameComponent implements OnInit {
  cardCount: number;
  cards: Card[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.cards = this.gameService.startGame();
  }

  /**
   * Handler that is called when a card is flipped.
   *
   * @param card Flipped card.
   */
  onFlipped(card: Card): void {
    this.gameService.flipCard(card);
  }

}
