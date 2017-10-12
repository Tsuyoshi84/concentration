import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

import { Card } from '../../models/card';
import { Result } from '../../enums/result.enum';
import { GameService } from '../../services/game/game.service';
import { FlipResultComponent } from '../../components/flip-result/flip-result.component';
import { GameStatus } from '../../enums/game-status.enum';

@Component({
  selector: 'co-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass'],
  animations: [
    trigger('switchView', [
      transition(':enter', [
        style({ transform: 'translateY(20%)', opacity: 0 }),
        animate('200ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate('200ms', style({ transform: 'translateY(-20%)', opacity: 0 }))
      ])
    ])
  ]
})
export class GameComponent implements OnInit {
  @ViewChild(FlipResultComponent)
  flipResult: FlipResultComponent;

  numOfFlipping: number;
  gameStatus: GameStatus;
  cards: Card[] = [];
  showController: boolean;
  showCards: boolean;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.numOfFlipping = 0;
    this.showController = true;
    this.gameStatus = this.gameService.getGameStatus();
  }

  /**
   * Handler that is called when a user starts the game.
   *
   * @param numOfCard Specified number of cards.
   */
  onStarted(numOfCard: number): void {
    this.cards = this.gameService.startGame(numOfCard);
    this.gameStatus = this.gameService.getGameStatus();
    this.showController = false;
    this.showCards = true;
  }

  /**
   * Handler that is called when resetting the game.
   */
  onRestarted(): void {
    this.gameService.reset();
    this.showController = true;
    this.showCards = false;
    this.numOfFlipping = 0;
  }

  /**
   * Handler that is called when a card is flipped.
   *
   * @param card Flipped card.
   */
  onFlipped(card: Card): void {
    this.gameService.flipCard(card).then(({ result, flippedCount, gameStatus }) => {
      this.numOfFlipping = flippedCount;
      this.gameStatus = gameStatus;
      this.flipResult.showResult(result);
    });
  }

}
