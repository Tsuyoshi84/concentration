import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Card } from '../types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card!: Card;
  @Output() clicked = new EventEmitter<Card>();

  /**
   * Handler called when a card is clicked.
   * Raise an event to notify the click event.
   */
  onClicked(): void {
    if (!this.card.flipped) {
      this.clicked.emit(this.card);
    }
  }

  get disabled(): boolean {
    return this.card.flipped || this.card.done;
  }
}
