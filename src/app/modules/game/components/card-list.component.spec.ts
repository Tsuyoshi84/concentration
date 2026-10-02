import { type ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { CardListComponent } from './card-list.component';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListComponent, CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('cards', [
      { id: 1, character: 'A', flipped: false, done: false },
      { id: 2, character: 'B', flipped: false, done: false },
    ]);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
