import { Injectable } from '@angular/core';
import { Card } from '../../models/card';
import { Result } from '../../enums/result.enum';
import { GameStatus } from '../../enums/game-status.enum';
import { shuffle } from 'lodash-es';
import { Observable } from 'rxjs';

/**
 * Bundle information related to card flipping.
 */
interface FlipResult {
  /** Result of flipping card. */
  result?: Result;
  /** Total number of flipping cards. */
  flippedCount: number;
  /** トライ回数 */
  tryCount: number;
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
  private flippedCount: number = 0;
  /** トライした回数 */
  private tryCount: number = 0;
  /** Total number of cheating */
  private cheatedCount: number = 0;
  /** Game status */
  private gameStatus: GameStatus;
  /** Emojis */
  private emo =
    '😀😂😎🤔😣😫🙃🤑😲🙁😖😭😨🤯😱😡🤮😇🤠🤡🤓👻👽💩😺🌝⛄️🐞💣❤️🐸🍎';

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
    this.tryCount = 0;
    this.cheatedCount = 0;
    this.gameStatus = GameStatus.Playing;

    let id = 0;
    this.cards.length = 0;
    const emojis = this.getEmojiArray(numOfCard / 2);
    for (let i = 1; i <= numOfCard / 2; i++) {
      this.cards.push(new Card(++id, emojis[i - 1]));
      this.cards.push(new Card(++id, emojis[i - 1]));
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
    this.tryCount = 0;
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

    return Observable.create((observer: any) => {
      observer.next({
        flippedCount: this.flippedCount,
        tryCount: this.tryCount,
        gameStatus: this.gameStatus,
      });

      if (this.flippedCards.length === 2) {
        setTimeout(() => {
          this.tryCount = Math.floor(this.flippedCount / 2);
          const result = this.check();
          observer.next({
            result: result,
            flippedCount: this.flippedCount,
            tryCount: this.tryCount,
            gameStatus: this.gameStatus,
          });

          if (result === Result.Wrong) {
            setTimeout(() => {
              // If wrong, wait certain time before unflipping cards
              this.flippedCards.forEach((c) => c.setBack());
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
    const unflippedCards = this.cards.filter((card) => {
      return !this.flippedCards.find((c) => c.id === card.id) && !card.done;
    });
    unflippedCards.forEach((c) => c.flip());

    return Observable.create(
      (observer: { next: (arg0: number) => void; complete: () => void }) => {
        observer.next(this.cheatedCount);

        setTimeout(() => {
          // Unflip the cards to get the game condition back
          unflippedCards.forEach((c) => c.flip());

          setTimeout(() => observer.complete(), this.FLIPPING_DURATION);
        }, this.CHEAT_DURATION);
      }
    );
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
    if (this.flippedCards[0].character === this.flippedCards[1].character) {
      this.flippedCards.forEach((card) => (card.done = true));
      if (this.cards.filter((c) => !c.done).length === 0) {
        this.gameStatus = GameStatus.Clear;
      }

      return this.gameStatus === GameStatus.Clear
        ? Result.Finish
        : Result.Correct;
    } else {
      return Result.Wrong;
    }
  }

  private getEmojiArray(length: number): Array<string> {
    const emojiArray = this.emojiStringToArray(this.emo);
    return shuffle(emojiArray).slice(0, length);
  }

  private emojiStringToArray(str: string): Array<string> {
    const split = str.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/);
    const arr = [];
    for (let i = 0; i < split.length; i++) {
      const char = split[i];
      if (char !== '') {
        arr.push(char);
      }
    }
    return arr;
  }
}
