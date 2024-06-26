import {
  type ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { CardListComponent } from './card-list.component';
import { CardComponent } from './card.component';

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
    component.cards = [
      { id: 1, character: 'A', flipped: false, done: false },
      { id: 2, character: 'B', flipped: false, done: false },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
