import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'co-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

}
