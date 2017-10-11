import { Injectable } from '@angular/core';
import { Card } from '../../models/card';

@Injectable()
export class GameService {
  private cards: Card[] = [];
  /** Cards that are */
  private correctCards: Card[] = [];
  /** Flipped card array */
  private flippedCards: Card[] = [];

  constructor() { }

  /**
   * Reset the game state and generate cards to play the game.
   *
   * @returns Generated cards.
   */
  startGame(): Card[] {
    this.correctCards.length = 0;
    this.flippedCards.length = 0;

    this.cards.push(new Card(1));
    this.cards.push(new Card(1));
    this.cards.push(new Card(2));
    this.cards.push(new Card(2));

    return this.cards;
  }

  flipCard(card: Card) {
    card.flip();
    this.flippedCards.push(card);

    // When a user flipped two cards, check if the number is same
    if (this.flippedCards.length === 2) {
      this.check();
    }
  }

  private check(): void {
    if (this.flippedCards[0].number === this.flippedCards[1].number) {
      this.correctCards.concat(this.flippedCards);
    } else {
      this.flippedCards.forEach(card => card.setBack());
    }

    this.flippedCards.length = 0;
  }

}
