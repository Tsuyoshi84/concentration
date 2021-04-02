import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Result } from '../../enums/result.enum';

@Component({
  selector: 'co-flip-result',
  templateUrl: './flip-result.component.html',
  styleUrls: ['./flip-result.component.sass'],
})
export class FlipResultComponent implements OnInit {
  /** Animation duration in ms */
  private readonly ANIMATION_DURATION = 1000;
  /** Result message */
  message!: string;
  /** Classes that controll animation */
  animateClasses: string[] = [];
  /** Indicate if the result messsage should be shown */
  showsMessage: boolean = false;
  /** Timer */
  timer: any;

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
    if (result === Result.None) {
      return;
    }

    if (this.timer) {
      clearTimeout(this.timer);
    }

    // Rest animation classes. Use detectChanges to notify that the classes were changed.
    this.reset();
    this.showsMessage = true;
    this.ref.detectChanges();

    let message: string, animateClasses: string[], fadeOutClass: string;

    // Decide message, animation classes based on the result
    switch (result) {
      case Result.Correct:
        message = 'Correct!';
        animateClasses = ['correct', 'animated', 'swing'];
        fadeOutClass = 'fadeOutUp';
        break;
      case Result.Wrong:
        message = '';
        animateClasses = [];
        fadeOutClass = 'fadeOutDown';
        break;
      case Result.Finish:
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
    fadeOutClass: string
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
