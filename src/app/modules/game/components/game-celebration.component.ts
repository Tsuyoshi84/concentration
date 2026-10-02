import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-game-celebration',
  templateUrl: './game-celebration.component.html',
  styleUrl: './game-celebration.component.css',
})
export class GameCelebrationComponent {
  readonly pairs = input.required<number>();
  readonly moves = input.required<number>();
  readonly playAgain = output<void>();
  readonly chooseDifficulty = output<void>();
  readonly confetti = Array.from({ length: 15 }, (_, index) => index);
}
