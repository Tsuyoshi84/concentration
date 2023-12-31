/**
 * Result of flipping card.
 * - 'None': Indicate that check was not required
 * - 'Correct': Indicate that a user flipped correct card
 * - 'Wrong': Indicate that a user flipped wrong card
 * - 'Finish': Indicate that a user finished the game
 */
export type Result = 'None' | 'Correct' | 'Wrong' | 'Finish';
