/**
 * Result of flipping card.
 */
export enum Result {
  /** Indicate that check was not required */
  None = 0,
  /** Indicate that a user flipped correct card */
  Correct = 1,
  /** Indicate that a user flipped wrong card */
  Wrong = 2,
  /** Indicate that a user finished the game */
  Finish = 3,
}
