import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { Card } from '../../models/card';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let cardEl: DebugElement;
  let card: Card;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    card = new Card(1, 'A');
    component.card = card;
    fixture.detectChanges();

    cardEl = fixture.debugElement.query(By.css('.container'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise flipped event when clicked', () => {
    let clickedCard;
    component.clicked.subscribe((c: Card) => (clickedCard = c));

    cardEl.triggerEventHandler('click', null);
    expect(clickedCard).toBe(card);
  });
});
