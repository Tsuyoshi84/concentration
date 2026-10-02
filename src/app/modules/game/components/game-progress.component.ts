import { Component, input } from '@angular/core';

@Component({
  selector: 'app-game-progress',
  templateUrl: './game-progress.component.html',
  styleUrls: ['./game-progress.component.css'],
})
export class GameProgressComponent {
  readonly pairsFound = input(0);
  readonly totalPairs = input(0);
  readonly numOfTry = input.required<number>();
}
