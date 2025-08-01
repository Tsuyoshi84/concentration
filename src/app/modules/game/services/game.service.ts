import { computed, Injectable, signal } from '@angular/core';
import { shuffle } from 'lodash-es';
import type { Card, GameStatus, Result } from '../types';
import { assertDefined } from '../utils/assertDefined';
import { assertHasAtLeast } from '../utils/hasAtLeast';

@Injectable()
export class GameService {
  /** Flipping card time duration in ms */
  private readonly FLIPPING_DURATION = 300;
  /** Time duration before un-flipping when flipped cards are wrong */
  private readonly CARD_HOLD_DURATION = 500;

  /** Cards of the game */
  cards = signal<readonly Card[]>([]);
  /** Selected card array */
  selectedCards = signal<readonly Card[]>([]);
  /** Number of try */
  numOfTry = signal(0);
  /** Card flipped result */
  flippedResult = signal<Result>('None');
  /** Game status */
  gameStatus = signal<GameStatus>('NotPlaying');
  isGameClear = computed(() => this.gameStatus() === 'Clear');
  /** Whether user can flip cards or not */
  canFlip = computed(() => {
    return this.gameStatus() === 'Playing' && this.selectedCards().length < 2;
  });

  /**
   * Reset the game state and generate cards to play the game.
   *
   * @param numOfCard Number of cards to generate.
   * @returns Generated cards.
   */
  startGame(numOfCard: number): void {
    this.reset();
    this.gameStatus.set('Playing');

    const newCards: Card[] = [];
    let id = 0;
    const emojis = getEmojiArray(numOfCard / 2);

    for (let i = 1; i <= numOfCard / 2; i++) {
      const character = emojis[i - 1];
      assertDefined(character);

      const card = {
        character,
        flipped: false,
        done: false,
      };
      newCards.push({ id: ++id, ...card });
      newCards.push({ id: ++id, ...card });
    }

    this.cards.set(shuffle(newCards));
  }

  /**
   * Reset the game conditions.
   */
  reset(): void {
    this.cards.set([]);
    this.selectedCards.set([]);
    this.numOfTry.set(0);
    this.flippedResult.set('None');
    this.gameStatus.set('NotPlaying');
  }

  /**
   * Store flipped card and check if flipped cards have the same number when two cards are flipped.
   *
   * @param card Flipped card.
   * @returns Result and total number of flipping.
   */
  async flipCard(card: Card): Promise<void> {
    card.flipped = !card.flipped;
    this.selectedCards.set([...this.selectedCards(), card]);

    // If flipped cards are less than 2, do nothing
    if (this.selectedCards().length < 2) return;

    // Wait until the card is flipped
    this.flippedResult.set('Unknown');
    await wait(this.FLIPPING_DURATION);

    // Check the result
    this.numOfTry.update((count) => count + 1);
    const cards = this.selectedCards();
    assertHasAtLeast(cards, 2);

    const [{ character: first }, { character: second }] = cards;
    this.flippedResult.set(first === second ? 'Correct' : 'Wrong');

    if (this.flippedResult() === 'Correct') {
      this.selectedCards.update((cards) => {
        for (const card of cards) {
          card.done = true;
        }
        return cards;
      });
      // Check if the game is finished
      if (this.cards().every(({ done }) => done)) {
        this.flippedResult.set('Finish');
        this.gameStatus.set('Clear');
      }
    }

    if (
      this.flippedResult() === 'Wrong' ||
      this.flippedResult() === 'Correct'
    ) {
      await wait(this.CARD_HOLD_DURATION);

      // Un-flip cards if the flipped cards are wrong
      if (this.flippedResult() === 'Wrong') {
        this.cards.update((cards) => {
          for (const card of cards.filter(({ done }) => !done)) {
            card.flipped = false;
          }
          return cards;
        });
      }

      this.selectedCards.set([]);
      this.flippedResult.set('None');
    }
  }
}

async function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

/** Emojis */
const CHARACTERS =
  '😀😂😎🤔😣😫🙃🤑😲🙁😖😭😨🤯😱😡🤮😇🤠🤡🤓👻👽💩😺🌝⛄️🐞💣❤️🐸🍎' as const;

function getEmojiArray(length: number): Array<string> {
  const emojiArray = emojiStringToArray(CHARACTERS);
  return shuffle(emojiArray).slice(0, length);
}

function emojiStringToArray(str: string): Array<string> {
  return str.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/).filter((c) => c !== '');
}
