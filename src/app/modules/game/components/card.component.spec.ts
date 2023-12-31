import { CardComponent } from './card.component';

describe('CardComponent', () => {
  const card = { id: 1, character: 'A', flipped: false, done: false };

  it('disabled should be true when flipped', () => {
    const comp = new CardComponent();
    comp.card = { ...card, flipped: true };
    expect(comp.disabled).toBe(true);
  });

  it('disabled should be true when done', () => {
    const comp = new CardComponent();
    comp.card = { ...card, done: true };
    expect(comp.disabled).toBe(true);
  });

  it('should raise flipped event when clicked', () => {
    const comp = new CardComponent();
    comp.card = card;
    comp.clicked.subscribe((c) => expect(c).toBe(card));
    comp.onClicked();
  });
});
