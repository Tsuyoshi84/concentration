import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import type { Card } from '../../types';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  @Input() cards!: Card[];
  @Output() cardClicked = new EventEmitter<Card>();

  cardsClass!: string;

  ngOnInit() {
    this.cardsClass = this.cards.length < 30 ? 'four-cards' : 'six-cards';
  }

  /**
   * Notify to the parent component that the given card is clicked.
   *
   * @param card Flipped card.
   */
  onClicked(card: Card): void {
    this.cardClicked.emit(card);
  }
}
