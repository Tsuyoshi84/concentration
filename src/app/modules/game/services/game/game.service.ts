import { Injectable } from '@angular/core';
import { Card } from '../../models/card';
import { Result } from '../../enums/result.enum';

/**
 * Bundle information related to card flipping.
 */
interface FlipResult {
  /** Result of flipping card. */
  result: Result;
  /** Total number of flipping cards. */
  flippedCount: number;
}

@Injectable()
export class GameService {
  /** Flipping card speed in ms. */
  private readonly FLIPPING_PERIOD = 500;
  /** Cards of the game */
  private cards: Card[] = [];
  /** Cards which a user flipped correctly */
  private correctCards: Card[] = [];
  /** Flipped card array */
  private flippedCards: Card[] = [];
  /** Total number of flipping cards. */
  private flippedCount: number;

  constructor() { }

  /**
   * Reset the game state and generate cards to play the game.
   *
   * @returns Generated cards.
   */
  startGame(): Card[] {
    this.correctCards.length = 0;
    this.flippedCards.length = 0;
    this.flippedCount = 0;

    this.cards.push(new Card(1));
    this.cards.push(new Card(1));
    this.cards.push(new Card(2));
    this.cards.push(new Card(2));

    return this.cards;
  }

  /**
   * Store flipped card and check if flipped cards have the same number when two cards are flipped.
   *
   * @param card Flipped card.
   * @returns Result and total number of flipping.
   */
  flipCard(card: Card): Promise<FlipResult> {
    card.flip();
    this.flippedCount++;
    this.flippedCards.push(card);

    // When a user flipped two cards, check if the number is same
    if (this.flippedCards.length === 2) {
      const promise = new Promise<FlipResult>((resolve) => {
        // Wait for flipping card
        setTimeout(() => {
          resolve({ result: this.check(), flippedCount: this.flippedCount });
        }, this.FLIPPING_PERIOD);
      });
      return promise;
    } else {
      return Promise.resolve({ result: Result.None, flippedCount: this.flippedCount });
    }
  }

  private check(): Result {
    if (this.flippedCards[0].number === this.flippedCards[1].number) {
      this.flippedCards.forEach(card => card.done = true);
      this.correctCards.concat(this.flippedCards);
      this.flippedCards.length = 0;
      return Result.Correct;
    } else {
      this.flippedCards.forEach(card => card.setBack());
      this.flippedCards.length = 0;
      return Result.Wrong;
    }
  }

}
