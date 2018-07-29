/**
 * Result of flipping card.
 */
export enum Result {
  /** Indicate that check was not required */
  None,
  /** Indicate that a user flipped correct card */
  Correct,
  /** Indicate that a user flipped wrong card */
  Wrong,
  /** Indicate that a user finished the game */
  Finish
}
