import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import type { Result } from '../../types';

@Component({
  selector: 'app-flip-result',
  templateUrl: './flip-result.component.html',
  styleUrls: ['./flip-result.component.css'],
})
export class FlipResultComponent implements OnInit {
  /** Animation duration in ms */
  private readonly ANIMATION_DURATION = 1000;
  /** Result message */
  message!: string;
  /** Classes that control animation */
  animateClasses: string[] = [];
  /** Indicate if the result message should be shown */
  showsMessage = false;
  /** Timer */
  timer: ReturnType<typeof setTimeout> | undefined;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.reset();
  }

  /**
   * Show a message depending on the given result.
   *
   * @param result Flipped result.
   */
  showResult(result: Result): void {
    if (result === 'None') return;

    if (this.timer) {
      clearTimeout(this.timer);
    }

    // Rest animation classes. Use detectChanges to notify that the classes were changed.
    this.reset();
    this.showsMessage = true;
    this.ref.detectChanges();

    let message: string;
    let animateClasses: string[];
    let fadeOutClass: string;

    // Decide message, animation classes based on the result
    switch (result) {
      case 'Correct':
        message = 'Correct!';
        animateClasses = ['correct', 'animated', 'swing'];
        fadeOutClass = 'fadeOutUp';
        break;
      case 'Wrong':
        message = '';
        animateClasses = [];
        fadeOutClass = 'fadeOutDown';
        break;
      case 'Finish':
        message = `Congrats!\nYou've finished!!`;
        animateClasses = ['finish', 'animated', 'tada'];
        fadeOutClass = 'fadeOutUp';
        break;
    }

    this.showAnimationMessage(message, animateClasses, fadeOutClass);
  }

  private showAnimationMessage(
    message: string,
    animateClasses: string[],
    fadeOutClass: string,
  ): void {
    this.message = message;
    this.animateClasses = animateClasses;

    // Fade out the message after certain time
    this.timer = setTimeout(() => {
      this.animateClasses.pop();
      this.animateClasses.push(fadeOutClass);
      this.timer = undefined;

      this.timer = setTimeout(() => {
        this.showsMessage = false;
      }, this.ANIMATION_DURATION);
    }, this.ANIMATION_DURATION);
  }

  /**
   * Reset the message and the animation classes.
   */
  private reset(): void {
    this.animateClasses.length = 0;
    this.message = '';
    this.showsMessage = false;
  }
}
