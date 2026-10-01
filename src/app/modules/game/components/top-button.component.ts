import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import type { Difficulty } from '../types';

@Component({
  standalone: false,
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./top-button.component.css'],
})
export class TopButtonComponent {
  @Input() difficulty!: Difficulty;
  @Output() start = new EventEmitter<Difficulty>();
}
