import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'co-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() flipped = new EventEmitter<Card>();

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Flip card.
   */
  flip(): void {
    if (!this.card.flipped) {
      this.flipped.emit(this.card);
    }
  }

}
