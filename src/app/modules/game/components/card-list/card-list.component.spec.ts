import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Card } from '../../models/card';
import { CardComponent } from '../card/card.component';
import { CardListComponent } from './card-list.component';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CardListComponent, CardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    component.cards = [new Card(1, 'A'), new Card(2, 'B')];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
