import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'co-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  flipped: boolean;

  constructor() {
    this.flipped = false;
  }

  ngOnInit() {
  }

  /**
   * Flip card.
   */
  flip(): void {
    this.flipped = !this.flipped;
  }

}
