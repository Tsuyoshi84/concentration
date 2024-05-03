import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Difficulty } from '../types';

@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.css'],
})
export class TopButtonComponent {
  @Input() difficulty!: Difficulty;
  @Output() start = new EventEmitter<Difficulty>();
}
