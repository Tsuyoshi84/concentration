import { TestBed, inject } from '@angular/core/testing';
import { GameService } from './game.service';

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService],
    });
  });

  it('should be created', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));

  describe('#startGame', () => {
    it('should generate specified number of cards', inject(
      [GameService],
      (service: GameService) => {
        service.startGame(10);
        expect(service.cards().length).toBe(10);
      },
    ));

    it('should generate pairs of cards which have the same numbers', inject(
      [GameService],
      (service: GameService) => {
        service.startGame(4);
        const cards = service.cards();

        expect(
          cards.filter((card) => card.character === cards[0].character).length,
        ).toBe(2);
        expect(
          cards.filter((card) => card.character === cards[1].character).length,
        ).toBe(2);
        expect(
          cards.filter((card) => card.character === cards[2].character).length,
        ).toBe(2);
        expect(
          cards.filter((card) => card.character === cards[3].character).length,
        ).toBe(2);
      },
    ));
  });

  describe('#getGameStatus', () => {
    it('should return correct game status', inject(
      [GameService],
      (service: GameService) => {
        expect(service.gameStatus()).toBe('NotPlaying');

        service.startGame(10);
        expect(service.gameStatus()).toBe('Playing');

        service.reset();
        expect(service.gameStatus()).toBe('NotPlaying');
      },
    ));
  });

  describe('#flipCard', () => {
    it('should change card flipped value', inject(
      [GameService],
      async (service: GameService) => {
        service.startGame(4);
        await service.flipCard(service.cards()[0]);

        expect(service.cards()[0].flipped).toBe(true);
      },
    ));

    it('should update selectedCards', inject(
      [GameService],
      async (service: GameService) => {
        service.startGame(4);
        await service.flipCard(service.cards()[0]);

        expect(service.numOfTry()).toBe(0);
        expect(service.flippedResult()).toBe('None');
        expect(service.selectedCards()[0]).toEqual(service.cards()[0]);
      },
    ));

    it('should update done value', inject(
      [GameService],
      async (service: GameService) => {
        service.startGame(4);

        const sameCards = service
          .cards()
          .filter((card) => card.character === service.cards()[0].character);

        await service.flipCard(sameCards[0]);
        await service.flipCard(sameCards[1]);

        expect(sameCards[0].done).toBe(true);
        expect(sameCards[1].done).toBe(true);
        expect(service.numOfTry()).toBe(1);
        expect(service.selectedCards()).toHaveSize(0);
      },
    ));

    it('should return appropriate result when flipping two wrong cards', inject(
      [GameService],
      async (service: GameService) => {
        service.startGame(4);

        // Get two different cards
        const card1 = service
          .cards()
          .filter((card) => card.character === service.cards()[0].character)[0];
        const card2 = service
          .cards()
          .filter((card) => card.character === service.cards()[1].character)[0];

        await service.flipCard(card1);
        await service.flipCard(card2);

        expect(service.numOfTry()).toBe(1);
        expect(service.selectedCards()).toHaveSize(0);
      },
    ));
  });
});
