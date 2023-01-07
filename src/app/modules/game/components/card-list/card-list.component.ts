import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass'],
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
