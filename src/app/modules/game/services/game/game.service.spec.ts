import { async, TestBed, inject } from '@angular/core/testing';

import { GameService } from './game.service';
import { Card } from '../../models/card';
import { GameStatus } from '../../enums/game-status.enum';
import { Result } from '../../enums/result.enum';

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService]
    });
  });

  it('should be created', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));

  describe('#startGame', () => {
    it('should generate specified number of cards', inject([GameService], (service: GameService) => {
      const cards = service.startGame(10);
      expect(cards.length).toBe(10);
    }));

    it('should generate pairs of cards which have the same numbers', inject([GameService], (service: GameService) => {
      const cards = service.startGame(10);

      expect(cards.filter(card => card.number === 1).length).toBe(2);
      expect(cards.filter(card => card.number === 2).length).toBe(2);
      expect(cards.filter(card => card.number === 3).length).toBe(2);
      expect(cards.filter(card => card.number === 4).length).toBe(2);
      expect(cards.filter(card => card.number === 5).length).toBe(2);
    }));
  });

  describe('#getGameStatus', () => {
    it('should return correct game status', inject([GameService], (service: GameService) => {
      expect(service.getGameStatus()).toBe(GameStatus.NotPlaying);

      const cards = service.startGame(10);
      expect(service.getGameStatus()).toBe(GameStatus.Playing);

      service.reset();
      expect(service.getGameStatus()).toBe(GameStatus.NotPlaying);
    }));
  });


  describe('#flipCard', () => {
    it('should change card flipped value', inject([GameService], (service: GameService) => {
      const cards = service.startGame(4);
      service.flipCard(cards[0]);

      expect(cards[0].flipped).toBeTruthy();
    }));

    it('should return appropriate result when flipping the first card', inject([GameService], (service: GameService) => {
      const cards = service.startGame(4);

      const subscription = service.flipCard(cards[0]);

      subscription.subscribe((result) => {
        expect(result).toEqual({
          flippedCount: 1,
          gameStatus: GameStatus.Playing,
        });
      });
    }));

    it('should return appropriate result when flipping two correct cards', inject([GameService], (service: GameService) => {
      const cards = service.startGame(4);

      const sameCards = cards.filter(card => card.number === 1);

      // Flip first card
      service.flipCard(sameCards[0]);

      // Flip second card
      const subscription = service.flipCard(sameCards[1]);

      let count = 0;
      subscription.subscribe(result => {
        count++;
        // Check the value when the second event comes
        if (count === 2) {
          expect(result).toEqual({
            flippedCount: 2,
            gameStatus: GameStatus.Playing,
            result: Result.Correct
          });
        }
      });
    }));

    it('should return appropriate result when flipping two wrong cards', inject([GameService],  (service: GameService) => {
      const cards = service.startGame(4);

      // Get two different cards
      const card1 = cards.filter(card => card.number === 1)[0];
      const card2 = cards.filter(card => card.number === 2)[0];

      // Flip a card which has 1
      service.flipCard(card1);

      // Flip a card which has 2
      const subscription = service.flipCard(card2);

      let count = 0;
      subscription.subscribe(result => {
        count++;
        // Check the value when the second event comes
        if (count === 2) {
          expect(result).toEqual({
            flippedCount: 2,
            gameStatus: GameStatus.Playing,
            result: Result.Wrong
          });
        }
      });
    }));

    it('should return appropriate result when finishing the game', inject([GameService], (service: GameService) => {
      const cards = service.startGame(4);

      const cards1 = cards.filter(card => card.number === 1);
      const cards2 = cards.filter(card => card.number === 2);

      service.flipCard(cards1[0]);
      service.flipCard(cards1[1]);
      service.flipCard(cards2[0]);

      // Flip the last card
      const subscription = service.flipCard(cards2[1]);

      let count = 0;
      subscription.subscribe(result => {
        count++;
        // Check the value when the second event comes
        if (count === 2) {
          expect(result).toEqual({
            flippedCount: 4,
            gameStatus: GameStatus.Clear,
            result: Result.Finish
          });
        }
      });

    }));
  });

  describe('#cheat', () => {
    it('should increase the number of cheating', async(inject([GameService], async (service: GameService) => {
      const cards = service.startGame(4);

      let numOfCheating = await service.cheat();
      expect(numOfCheating).toBe(1);

      numOfCheating = await service.cheat();
      expect(numOfCheating).toBe(2);
    })));
  });

});
