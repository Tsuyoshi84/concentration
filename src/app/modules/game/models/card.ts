export type Card = {
  /** ID */
  id: number;
  /** Describes if the card is flipped */
  flipped: boolean;
  /** Gets card character.  */
  character: string;
  /** Whether the card is done.  */
  done: boolean;
};
