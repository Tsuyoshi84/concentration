import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import type { Card } from '../types';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let cardEl: DebugElement;
  let card: Card;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    card = { id: 1, character: 'A', flipped: false, done: false };
    component.card = card;
    fixture.detectChanges();

    cardEl = fixture.debugElement.query(By.css('.button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise flipped event when clicked', () => {
    let clickedCard!: Card;
    component.clicked.subscribe((c: Card) => {
      clickedCard = c;
    });

    cardEl.triggerEventHandler('click', null);
    expect(clickedCard).toBe(card);
  });
});
