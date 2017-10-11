export class Card {
  private _number: number;
  private _flipped: boolean;

  constructor(number: number) {
    this._number = number;
    this._flipped = false;
  }

  /**
   * Flip card.
   */
  flip(): void {
    this._flipped = !this._flipped;
  }

  /**
   * Set the card state back.
   */
  setBack(): void {
    this._flipped = false;
  }

  /**
   * Describes if the card is flipped.
   */
  get flipped(): boolean {
    return this._flipped;
  }

  /**
   * Card number.
   */
  get number(): number {
    return this._number;
  }
}
