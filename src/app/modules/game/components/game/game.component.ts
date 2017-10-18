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

  /** Store GameStatus enum to a variable so that it can be accessed from the view */
  readonly GameStatus = GameStatus;

  /** Number of flipping card */
  numOfFlipping: number;
  /** Number of cheating */
  numOfCheating: number;
  /** Game status */
  gameStatus: GameStatus;
  /** Cards used for the game */
  cards: Card[] = [];
  /** Indicates if the controller should be shown */
  showsController: boolean;
  /** Indicates if cards should be shown */
  showsCards: boolean;
  /** Indicate if a user can flip cards  */
  canFlip: boolean;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.canFlip = true;
    this.showsController = true;
    this.gameStatus = this.gameService.getGameStatus();
    this.initializeConditions();
  }

  /**
   * Handler that is called when a user starts the game.
   *
   * @param numOfCard Specified number of cards.
   */
  onStarted(numOfCard: number): void {
    this.cards = this.gameService.startGame(numOfCard);
    this.gameStatus = this.gameService.getGameStatus();
    this.showsController = false;
    this.showsCards = true;
  }

  /**
   * Handler that is called when resetting the game.
   */
  onRestarted(): void {
    this.gameService.reset();
    this.showsController = true;
    this.showsCards = false;
    this.initializeConditions();
  }

  /**
   * Handler that is called when a user clicked a card.
   *
   * @param card Flipped card.
   */
  onCardClicked(card: Card): void {
    if (!this.canFlip) { return; }

    // If the given card is not flipped, flip it
    this.canFlip = false;
    this.gameService.flipCard(card).then(({ result, flippedCount, gameStatus }) => {
      this.numOfFlipping = flippedCount;
      this.gameStatus = gameStatus;
      this.flipResult.showResult(result);
      this.canFlip = true;
    });
  }

  /**
   * Flip all the unflipped card.
   */
  cheat(): void {
    if (!this.canFlip) { return; }

    this.canFlip = false;
    this.gameService.cheat().then((cheatedCount) => {
      this.numOfCheating = cheatedCount;
      this.canFlip = true;
    });
  }

  /**
   * Initialize game conditions.
   */
  private initializeConditions(): void {
    this.numOfFlipping = 0;
    this.numOfCheating = 0;
  }
}
