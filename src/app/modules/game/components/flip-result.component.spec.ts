import { type ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FlipResultComponent } from './flip-result.component';

describe('FlipResultComponent', () => {
  let component: FlipResultComponent;
  let fixture: ComponentFixture<FlipResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipResultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlipResultComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('result', 'None');
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('result feedback', () => {
    it('should not show result message when Result.None is passed', () => {
      fixture.componentRef.setInput('result', 'None');
      fixture.detectChanges();
      const resultElement = fixture.debugElement.query(By.css('.result'));

      expect(resultElement).toBeNull();
    });

    it('should show nothing message when Result.Wrong is passed', () => {
      fixture.componentRef.setInput('result', 'Wrong');
      fixture.detectChanges();
      const resultElement = fixture.debugElement.query(By.css('.result'));

      expect(resultElement.nativeElement.textContent.trim()).toEqual('');
    });

    it('should show "Correct" message when Result.Correct is passed', () => {
      fixture.componentRef.setInput('result', 'Correct');
      fixture.detectChanges();
      const resultElement = fixture.debugElement.query(By.css('.result'));

      expect(resultElement.nativeElement.textContent.trim()).toEqual(
        'Correct!',
      );
      expect(resultElement.classes.correct).toBeTruthy();
    });

    it('should show "Congrats" message when Result.Finish is passed', () => {
      fixture.componentRef.setInput('result', 'Finish');
      fixture.detectChanges();
      const resultElement = fixture.debugElement.query(By.css('.result'));

      expect(resultElement.nativeElement.textContent.trim()).toEqual(
        `Congrats!\nYou've finished!!`,
      );
      expect(resultElement.classes.finish).toBeTruthy();
    });

    it('should keep showing feedback after result resets to None', async () => {
      vi.useFakeTimers();

      fixture.componentRef.setInput('result', 'Correct');
      fixture.detectChanges();

      fixture.componentRef.setInput('result', 'None');
      fixture.detectChanges();

      const resultElement = fixture.debugElement.query(By.css('.result'));
      expect(resultElement.nativeElement.textContent.trim()).toEqual(
        'Correct!',
      );

      await vi.advanceTimersByTimeAsync(1000);
      fixture.detectChanges();
      expect(resultElement.classes.fadeOutUp).toBeTruthy();

      await vi.advanceTimersByTimeAsync(1000);
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.result'))).toBeNull();

      vi.useRealTimers();
    });
  });
});
