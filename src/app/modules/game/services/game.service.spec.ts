import { TestBed } from '@angular/core/testing';
import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService],
    });
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#startGame', () => {
    it('should generate specified number of cards', () => {
      service.startGame(10);
      expect(service.cards().length).toBe(10);
    });

    it('should generate pairs of cards which have the same numbers', () => {
      service.startGame(4);
      const cards = service.cards();

      expect(
        cards.filter((card) => card.character === cards[0]?.character).length,
      ).toBe(2);
      expect(
        cards.filter((card) => card.character === cards[1]?.character).length,
      ).toBe(2);
      expect(
        cards.filter((card) => card.character === cards[2]?.character).length,
      ).toBe(2);
      expect(
        cards.filter((card) => card.character === cards[3]?.character).length,
      ).toBe(2);
    });
  });

  describe('#getGameStatus', () => {
    it('should return correct game status', () => {
      expect(service.gameStatus()).toBe('NotPlaying');

      service.startGame(10);
      expect(service.gameStatus()).toBe('Playing');

      service.reset();
      expect(service.gameStatus()).toBe('NotPlaying');
    });
  });

  describe('#flipCard', () => {
    it('should change card flipped value', async () => {
      service.startGame(4);
      // biome-ignore lint/style/noNonNullAssertion: Ignore
      await service.flipCard(service.cards()[0]!);

      expect(service.cards()[0]?.flipped).toBe(true);
    });

    it('should update selectedCards', async () => {
      service.startGame(4);
      // biome-ignore lint/style/noNonNullAssertion: Ignore
      await service.flipCard(service.cards()[0]!);

      expect(service.numOfTry()).toBe(0);
      expect(service.flippedResult()).toBe('None');
      expect(service.selectedCards()[0]).toEqual(service.cards()[0]);
    });

    it('should update done value', async () => {
      service.startGame(4);

      const sameCards = service
        .cards()
        .filter((card) => card.character === service.cards()[0]?.character);
      // biome-ignore lint/style/noNonNullAssertion: Ignore
      const firstId = sameCards[0]!.id;
      // biome-ignore lint/style/noNonNullAssertion: Ignore
      const secondId = sameCards[1]!.id;

      // biome-ignore lint/style/noNonNullAssertion: Ignore
      await service.flipCard(sameCards[0]!);
      // biome-ignore lint/style/noNonNullAssertion: Ignore
      await service.flipCard(service.cards().find((c) => c.id === secondId)!);

      expect(service.cards().find((c) => c.id === firstId)?.done).toBe(true);
      expect(service.cards().find((c) => c.id === secondId)?.done).toBe(true);
      expect(service.numOfTry()).toBe(1);
      expect(service.selectedCards()).toHaveLength(0);
    });

    it('should return appropriate result when flipping two wrong cards', async () => {
      service.startGame(4);

      // Get two different cards
      const card1 = service
        .cards()
        .filter((_) => _.character === service.cards()[0]?.character)[0];
      const card2 = service
        .cards()
        .filter((_) => _.character === service.cards()[1]?.character)[0];

      // biome-ignore lint/style/noNonNullAssertion: Ignore
      await service.flipCard(card1!);
      // biome-ignore lint/style/noNonNullAssertion: Ignore
      await service.flipCard(card2!);

      expect(service.numOfTry()).toBe(1);
      expect(service.selectedCards()).toHaveLength(0);
      expect(service.cards().every((c) => !c.flipped || c.done)).toBe(true);
    });
  });
});
