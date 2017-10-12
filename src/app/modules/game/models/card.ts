export class Card {
  private _id: number;
  private _number: number;
  private _flipped: boolean;
  private _done: boolean;

  constructor(id: number, number: number) {
    this._id = id;
    this._number = number;
    this._flipped = false;
    this._done = false;
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
   * ID
   */
  get id(): number {
    return this._id;
  }

  /**
   * Describes if the card is flipped.
   */
  get flipped(): boolean {
    return this._flipped;
  }

  /**
   * Get card number.
   */
  get number(): number {
    return this._number;
  }

  set done(done: boolean) {
    this._done = done;
  }

  /**
   * Describes if a card is done.
   */
  get done(): boolean {
    return this._done;
  }
}
