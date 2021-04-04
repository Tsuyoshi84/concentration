import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'co-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
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
}
