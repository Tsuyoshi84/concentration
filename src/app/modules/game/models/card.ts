export class Card {
  private _id: number;
  private _character: string;
  private _flipped: boolean;
  private _done: boolean;

  constructor(id: number, character: string) {
    this._id = id;
    this._character = character;
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
   * Gets card character.
   */
  get character(): string {
    return this._character;
  }

  /**
   * Sets if a card is done.
   */
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
