import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'co-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit {
  @Input() cardCount: number;
  @Input() cards: Card[];
  @Output() flipped = new EventEmitter<Card>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Notify to the parent component that the given card is flipped.
   *
   * @param card Flipped card.
   */
  onFlipped(card: Card): void {
    this.flipped.emit(card);
  }

}
