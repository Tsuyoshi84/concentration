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
    it('should generate specified number of cards', inject(
      [GameService],
      (service: GameService) => {
        const cards = service.startGame(10);
        expect(cards.length).toBe(10);
      }
    ));

    it('should generate pairs of cards which have the same numbers', inject(
      [GameService],
      (service: GameService) => {
        const cards = service.startGame(4);

        expect(
          cards.filter(card => card.character === cards[0].character).length
        ).toBe(2);
        expect(
          cards.filter(card => card.character === cards[1].character).length
        ).toBe(2);
        expect(
          cards.filter(card => card.character === cards[2].character).length
        ).toBe(2);
        expect(
          cards.filter(card => card.character === cards[3].character).length
        ).toBe(2);
      }
    ));
  });

  describe('#getGameStatus', () => {
    it('should return correct game status', inject(
      [GameService],
      (service: GameService) => {
        expect(service.getGameStatus()).toBe(GameStatus.NotPlaying);

        const cards = service.startGame(10);
        expect(service.getGameStatus()).toBe(GameStatus.Playing);

        service.reset();
        expect(service.getGameStatus()).toBe(GameStatus.NotPlaying);
      }
    ));
  });

  describe('#flipCard', () => {
    it('should change card flipped value', inject(
      [GameService],
      (service: GameService) => {
        const cards = service.startGame(4);
        service.flipCard(cards[0]);

        expect(cards[0].flipped).toBeTruthy();
      }
    ));

    it('should return appropriate result when flipping the first card', inject(
      [GameService],
      (service: GameService) => {
        const cards = service.startGame(4);

        const subscription = service.flipCard(cards[0]);

        subscription.subscribe(result => {
          expect(result).toEqual({
            tryCount: 0,
            flippedCount: 1,
            gameStatus: GameStatus.Playing
          });
        });
      }
    ));

    it('should return appropriate result when flipping two correct cards', inject(
      [GameService],
      (service: GameService) => {
        const cards = service.startGame(4);

        const sameCards = cards.filter(
          card => card.character === cards[0].character
        );

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
              tryCount: 1,
              flippedCount: 2,
              gameStatus: GameStatus.Playing,
              result: Result.Correct
            });
          }
        });
      }
    ));

    it('should return appropriate result when flipping two wrong cards', inject(
      [GameService],
      (service: GameService) => {
        const cards = service.startGame(4);

        // Get two different cards
        const card1 = cards.filter(
          card => card.character === cards[0].character
        )[0];
        const card2 = cards.filter(
          card => card.character === cards[1].character
        )[0];

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
              tryCount: 1,
              flippedCount: 2,
              gameStatus: GameStatus.Playing,
              result: Result.Wrong
            });
          }
        });
      }
    ));
  });

  describe('#cheat', () => {
    it('should increase the number of cheating', inject(
      [GameService],
      (service: GameService) => {
        const cards = service.startGame(4);

        service.cheat().subscribe(numOfCheating => {
          expect(numOfCheating).toBe(1);
        });

        service.cheat().subscribe(numOfCheating => {
          expect(numOfCheating).toBe(2);
        });
      }
    ));
  });
});
