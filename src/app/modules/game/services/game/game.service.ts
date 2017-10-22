import { Injectable } from '@angular/core';
import { Card } from '../../models/card';
import { Result } from '../../enums/result.enum';
import { GameStatus } from '../../enums/game-status.enum';

import { Observable } from 'rxjs/Observable';

/**
 * Bundle information related to card flipping.
 */
interface FlipResult {
  /** Result of flipping card. */
  result?: Result;
  /** Total number of flipping cards. */
  flippedCount: number;
  /** Game status. */
  gameStatus: GameStatus;
}

@Injectable()
export class GameService {
  /** Flipping card time duration in ms */
  private readonly FLIPPING_DURATION = 300;
  /** Time duration before unflipping when flipped cards are wrong */
  private readonly CARD_HOLD_DURATION = 500;
  /** Cheating duration in ms */
  private readonly CHEAT_DURATION = 1000;
  /** Cards of the game */
  private cards: Card[] = [];
  /** Flipped card array */
  private flippedCards: Card[] = [];
  /** Total number of flipping cards */
  private flippedCount: number;
  /** Total number of cheating */
  private cheatedCount: number;
  /** Game status */
  private gameStatus: GameStatus;

  constructor() {
    this.gameStatus = GameStatus.NotPlaying;
   }

  /**
   * Reset the game state and generate cards to play the game.
   *
   * @param numOfCard Number of cards to generate.
   * @returns Generated cards.
   */
  startGame(numOfCard: number): Card[] {
    this.flippedCards.length = 0;
    this.flippedCount = 0;
    this.cheatedCount = 0;
    this.gameStatus = GameStatus.Playing;

    let id = 0;
    for (let i = 1; i <= numOfCard / 2; i++) {
      this.cards.push(new Card(++id, i));
      this.cards.push(new Card(++id, i));
    }

    this.cards = this.shuffle(this.cards);

    return this.cards;
  }

  /**
   * Reset the game conditions.
   */
  reset(): void {
    this.cards.length = 0;
    this.flippedCards.length = 0;
    this.flippedCount = 0;
    this.gameStatus = GameStatus.NotPlaying;
  }

  /**
   * Store flipped card and check if flipped cards have the same number when two cards are flipped.
   *
   * @param card Flipped card.
   * @returns Result and total number of flipping.
   */
  flipCard(card: Card): Observable<FlipResult> {
    card.flip();
    this.flippedCount++;
    this.flippedCards.push(card);

    return Observable.create(observer => {
      observer.next({
        flippedCount: this.flippedCount,
        gameStatus: this.gameStatus
      });

      if (this.flippedCards.length === 2) {
        setTimeout(() => {
          const result = this.check();
          observer.next({
            result: result,
            flippedCount: this.flippedCount,
            gameStatus: this.gameStatus
          });

          if (result === Result.Wrong) {
            setTimeout(() => {
              // If wrong, wait certain time before unflipping cards
              this.flippedCards.forEach(c => c.setBack());
              this.flippedCards.length = 0;
              observer.complete();
            }, this.CARD_HOLD_DURATION);
          } else {
            this.flippedCards.length = 0;
            observer.complete();
          }
        }, this.FLIPPING_DURATION);
      } else {
        observer.complete();
      }
    });
  }

  /**
   * Flip all the unflipped cards temporarily.
   * This returns the number of cheating after unflipping via promise.
   */
  cheat(): Observable<number> {
    this.cheatedCount++;
    // Flip unflipped cards
    const unflippedCards = this.cards.filter(card => {
      return !this.flippedCards.find(c => c.id === card.id) && !card.done;
    });
    unflippedCards.forEach(c => c.flip());

    return Observable.create(observer => {
      observer.next(this.cheatedCount);

      setTimeout(() => {
        // Unflip the cards to get the game condition back
        unflippedCards.forEach(c => c.flip());

        setTimeout(() => observer.complete(), this.FLIPPING_DURATION);
      }, this.CHEAT_DURATION);
    });
  }

  /**
   * Get the current game status.
   */
  getGameStatus(): GameStatus {
    return this.gameStatus;
  }

  private shuffle<T>(items: T[]): T[] {
    let temp: T;
    let randIndex: number;

    for (let i = 0; i < items.length; i++) {
      randIndex = Math.floor(Math.random() * items.length);
      temp = items[i];
      items[i] = items[randIndex];
      items[randIndex] = temp;
    }

    return items;
  }

  private check(): Result {
    if (this.flippedCards[0].number === this.flippedCards[1].number) {
      this.flippedCards.forEach(card => card.done = true);
      if (this.cards.filter(c => !c.done).length === 0) {
        this.gameStatus = GameStatus.Clear;
      }

      return this.gameStatus === GameStatus.Clear ? Result.Finish : Result.Correct;
    } else {
      return Result.Wrong;
    }
  }

}
