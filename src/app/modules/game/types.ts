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

/**
 * Game difficulty.
 */
export type Difficulty = {
  /** Label of the difficulty */
  label: string;
  /** Number of cards */
  num: number;
  /** Level of the difficulty */
  level: number;
  /** Icon to show */
  icon: string;
};

/**
 * Game status.
 * - 'NotPlaying': Indicate that a user is not playing the game
 * - 'Playing': Indicate that a user is playing the game
 * - 'Clear': Indicate that a user has flipped all the cards correctly
 */
export type GameStatus = 'NotPlaying' | 'Playing' | 'Clear';

/**
 * Result of flipping card.
 * - 'None': Indicate that check was not required
 * - 'Correct': Indicate that a user flipped correct card
 * - 'Wrong': Indicate that a user flipped wrong card
 * - 'Finish': Indicate that a user finished the game
 */
export type Result = 'None' | 'Correct' | 'Wrong' | 'Finish' | 'Unknown';
