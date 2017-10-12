import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListComponent } from './card-list.component';
import { CardComponent } from '../card/card.component';
import { Card } from '../../models/card';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListComponent, CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    component.cards = [new Card(1, 1), new Card(2, 2)];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
