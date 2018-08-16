import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'co-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input()
  card: Card;
  @Output()
  clicked = new EventEmitter<Card>();

  constructor() {}

  ngOnInit() {}

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
