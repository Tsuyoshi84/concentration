import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

import { Card } from '../../models/card';
import { Result } from '../../enums/result.enum';
import { GameService } from '../../services/game/game.service';
import { FlipResultComponent } from '../../components/flip-result/flip-result.component';

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

  flippedCount: number;
  cards: Card[] = [];
  showController: boolean;
  showCards: boolean;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.showController = true;
  }

  onStarted(numOfCard: number): void {
    this.cards = this.gameService.startGame(numOfCard);
    this.showController = false;
    this.showCards = true;
  }

  /**
   * Handler that is called when a card is flipped.
   *
   * @param card Flipped card.
   */
  onFlipped(card: Card): void {
    this.gameService.flipCard(card).then(({ result, flippedCount }) => {
      this.flippedCount = flippedCount;
      this.flipResult.showResult(result);
    });
  }

}
