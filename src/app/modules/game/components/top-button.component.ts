import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import type { Difficulty } from '../types';

@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./top-button.component.css'],
})
export class TopButtonComponent {
  readonly difficulty = input.required<Difficulty>();
  readonly start = output<Difficulty>();
}
