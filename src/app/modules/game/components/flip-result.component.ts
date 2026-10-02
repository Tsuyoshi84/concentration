import {
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import type { Result } from '../types';

const FEEDBACK_RESULTS: ReadonlySet<Result> = new Set([
  'Correct',
  'Wrong',
  'Finish',
]);

@Component({
  selector: 'app-flip-result',
  templateUrl: './flip-result.component.html',
  styleUrls: ['./flip-result.component.css'],
})
export class FlipResultComponent {
  private readonly destroyRef = inject(DestroyRef);

  /** Animation duration in ms */
  private readonly ANIMATION_DURATION = 1000;
  private timers: ReturnType<typeof setTimeout>[] = [];

  /** Flipped result from the game service */
  readonly result = input.required<Result>();

  /** Latched result used for the visible feedback message */
  readonly displayResult = signal<Result>('None');
  /** Whether the fade-out animation class should be applied */
  private readonly fading = signal(false);
  /** Indicate if the result message should be shown */
  readonly showsMessage = signal(false);

  /** Classes that control animation */
  readonly animateClasses = computed(() => {
    const result = this.displayResult();
    const fading = this.fading();

    switch (result) {
      case 'Correct':
        return fading
          ? ['correct', 'animated', 'fade-out-up']
          : ['correct', 'animated', 'swing'];
      case 'Wrong':
        return fading ? ['fade-out-down'] : [];
      case 'Finish':
        return fading
          ? ['finish', 'animated', 'fade-out-up']
          : ['finish', 'animated', 'tada'];
      default:
        return [];
    }
  });

  constructor() {
    this.destroyRef.onDestroy(() => this.clearTimers());

    effect(() => {
      const result = this.result();
      if (!FEEDBACK_RESULTS.has(result)) {
        return;
      }

      this.startFeedback(result);
    });
  }

  private startFeedback(result: Result): void {
    this.clearTimers();
    this.fading.set(false);
    this.displayResult.set(result);
    this.showsMessage.set(true);

    this.timers.push(
      setTimeout(() => {
        this.fading.set(true);
        this.timers.push(
          setTimeout(() => {
            this.showsMessage.set(false);
          }, this.ANIMATION_DURATION),
        );
      }, this.ANIMATION_DURATION),
    );
  }

  private clearTimers(): void {
    for (const timer of this.timers) {
      clearTimeout(timer);
    }
    this.timers = [];
  }
}
