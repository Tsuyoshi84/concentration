import { Component, input, output } from '@angular/core';
import { Card } from '../types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  readonly card = input.required<Card>();
  readonly clicked = output<Card>();

  /**
   * Handler called when a card is clicked.
   * Raise an event to notify the click event.
   */
  onClicked(): void {
    const card = this.card();
    if (!card.flipped) {
      this.clicked.emit(card);
    }
  }

  get disabled(): boolean {
    const card = this.card();
    return card.flipped || card.done;
  }
}
