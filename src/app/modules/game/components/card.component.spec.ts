import { type ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  const card = { id: 1, character: 'A', flipped: false, done: false };
  let fixture: ComponentFixture<CardComponent>;
  let comp: CardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    comp = fixture.componentInstance;
  });

  it('disabled should be true when flipped', () => {
    fixture.componentRef.setInput('card', { ...card, flipped: true });
    expect(comp.disabled).toBe(true);
  });

  it('disabled should be true when done', () => {
    fixture.componentRef.setInput('card', { ...card, done: true });
    expect(comp.disabled).toBe(true);
  });

  it('should raise flipped event when clicked', () => {
    fixture.componentRef.setInput('card', card);
    let emitted: typeof card | undefined;
    comp.clicked.subscribe((c) => {
      emitted = c;
    });
    comp.onClicked();
    expect(emitted).toBe(card);
  });
});
