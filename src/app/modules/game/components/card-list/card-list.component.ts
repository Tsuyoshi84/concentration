import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'co-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit {
  @Input() cards: Card[];
  @Output() cardClicked = new EventEmitter<Card>();

  constructor() {}

  ngOnInit() {}

  /**
   * Notify to the parent component that the given card is clicked.
   *
   * @param card Flipped card.
   */
  onClicked(card: Card): void {
    this.cardClicked.emit(card);
  }
}
