import { Component, inject } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button type="button" class="action" aria-label="Dark mode"
      [attr.aria-pressed]="theme.isDark()" (click)="theme.toggle()">
      <span aria-hidden="true">{{ theme.isDark() ? '☾' : '☀' }}</span>
      Dark mode
    </button>
  `,
})
export class ThemeToggleComponent {
  readonly theme = inject(ThemeService);
}
