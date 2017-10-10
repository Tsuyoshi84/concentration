import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'co-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit {
  @Input() cardCount: number;
  cards: Card[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.cardCount; i++) {
      this.cards.push(new Card(i));
    }
  }

}
