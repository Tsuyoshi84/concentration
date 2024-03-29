import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GAME_DIFFICULTY } from '../constants/game-difficulty';
import type { Difficulty } from '../types';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent implements OnInit {
  @Output() started = new EventEmitter<number>();
  /** List of difficulties that user can select from */
  difficulties!: readonly Difficulty[];
  /** Number of cards selected by a user */
  numOfCard!: number;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log({ GAME_DIFFICULTY });
    this.difficulties = GAME_DIFFICULTY;
    this.numOfCard = 0;
  }

  /**
   * Notify parent component that starting the game.
   */
  start(diff: Difficulty): void {
    this.router.navigate(['game', diff.level]);
  }
}
