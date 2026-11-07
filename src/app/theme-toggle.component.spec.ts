import { TestBed } from '@angular/core/testing';
import { ThemeToggleComponent } from './theme-toggle.component';

describe('Theme toggle', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ imports: [ThemeToggleComponent] });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
    delete document.documentElement.dataset.theme;
  });

  function createToggle() {
    const fixture = TestBed.createComponent(ThemeToggleComponent);
    fixture.detectChanges();
    return fixture;
  }

  it('switches both ways and persists the selected theme', () => {
    const fixture = createToggle();
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(button.getAttribute('aria-pressed')).toBe('false');
    expect(document.documentElement.dataset.theme).toBe('light');

    button.click();
    fixture.detectChanges();
    expect(button.getAttribute('aria-pressed')).toBe('true');
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem('concentration-theme')).toBe('dark');

    button.click();
    fixture.detectChanges();
    expect(button.getAttribute('aria-pressed')).toBe('false');
    expect(document.documentElement.dataset.theme).toBe('light');
    expect(localStorage.getItem('concentration-theme')).toBe('light');
  });

  it.each(['dark', 'light', 'invalid'])(
    'restores a saved %s preference with a light fallback',
    (saved) => {
      localStorage.setItem('concentration-theme', saved);
      const fixture = createToggle();
      expect(fixture.componentInstance.theme.isDark()).toBe(saved === 'dark');
      expect(document.documentElement.dataset.theme).toBe(
        saved === 'dark' ? 'dark' : 'light',
      );
    },
  );

  it('keeps the preference when a routed screen recreates the toggle', () => {
    const first = createToggle();
    first.componentInstance.theme.toggle();
    first.destroy();
    const second = createToggle();
    expect(second.componentInstance.theme.isDark()).toBe(true);
    expect(
      second.nativeElement.querySelector('button').getAttribute('aria-pressed'),
    ).toBe('true');
  });

  it('still switches when reading or writing storage is blocked', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('Storage blocked');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('Storage blocked');
    });
    const fixture = createToggle();
    expect(() => fixture.componentInstance.theme.toggle()).not.toThrow();
    expect(document.documentElement.dataset.theme).toBe('dark');
  });
});
