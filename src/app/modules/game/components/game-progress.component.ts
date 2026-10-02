import { Component, input } from '@angular/core';

@Component({
  selector: 'app-game-progress',
  templateUrl: './game-progress.component.html',
  styleUrls: ['./game-progress.component.css'],
})
export class GameProgressComponent {
  readonly numOfTry = input.required<number>();
}
