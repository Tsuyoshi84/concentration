import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { Card } from '../types';
import { CardComponent } from './card.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./card-list.component.css'],
  imports: [CardComponent],
})
export class CardListComponent {
  /** Card array to display */
  readonly cards = input.required<readonly Card[]>();
  /** Event emitted when a card is clicked */
  readonly cardClicked = output<Card>();

  readonly cardsClass = computed(() =>
    this.cards().length < 30 ? 'four-cards' : 'six-cards',
  );

  /**
   * Notify to the parent component that the given card is clicked.
   *
   * @param card Flipped card.
   */
  onClicked(card: Card): void {
    this.cardClicked.emit(card);
  }
}
