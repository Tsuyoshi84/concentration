import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly dark = signal(false);
  readonly isDark = this.dark.asReadonly();

  constructor() {
    try {
      this.dark.set(
        this.document.defaultView?.localStorage.getItem(
          'concentration-theme',
        ) === 'dark',
      );
    } catch {
      // Storage can be unavailable in private or restricted browsing.
    }
    this.applyTheme();
  }

  toggle(): void {
    this.dark.update((value) => !value);
    this.applyTheme();
    try {
      this.document.defaultView?.localStorage.setItem(
        'concentration-theme',
        this.isDark() ? 'dark' : 'light',
      );
    } catch {
      // Switching themes still works without persistent storage.
    }
  }

  private applyTheme(): void {
    this.document.documentElement.dataset.theme = this.isDark()
      ? 'dark'
      : 'light';
  }
}
