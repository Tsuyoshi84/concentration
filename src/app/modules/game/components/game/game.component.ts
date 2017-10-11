import { Component, OnInit, ViewChild } from '@angular/core';
import { Card } from '../../models/card';
import { Result } from '../../enums/result.enum';
import { GameService } from '../../services/game/game.service';
import { FlipResultComponent } from '../../components/flip-result/flip-result.component';

@Component({
  selector: 'co-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass'],
})
export class GameComponent implements OnInit {
  @ViewChild(FlipResultComponent)
  flipResult: FlipResultComponent;
  cardCount: number;
  cards: Card[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.cards = this.gameService.startGame();
  }

  /**
   * Handler that is called when a card is flipped.
   *
   * @param card Flipped card.
   */
  onFlipped(card: Card): void {
    const result = this.gameService.flipCard(card);

    if (result === Result.Correct) {
      console.log('Correct!');
    } else if (result === Result.Wrong) {
      console.log('Wrong!');
    }

    this.flipResult.showResult(result);
  }

}
