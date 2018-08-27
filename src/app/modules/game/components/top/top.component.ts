import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import gameDifficulty from '../../constants/game-difficulty';

interface Difficulty {
  label: string;
  num: number;
  level: number;
}

@Component({
  selector: 'co-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.sass']
})
export class TopComponent implements OnInit {
  @Output()
  started = new EventEmitter<number>();
  /** List of difficulties that user can select from */
  difficulties: Difficulty[];
  /** Number of cards selected by a user */
  numOfCard: number;

  constructor(private router: Router) {}

  ngOnInit() {
    this.difficulties = gameDifficulty;
    this.numOfCard = this.difficulties[1].num;
  }

  /**
   * Notify parent component that starting the game.
   */
  start(diff: Difficulty): void {
    this.router.navigate(['game', diff.level]);
  }
}
