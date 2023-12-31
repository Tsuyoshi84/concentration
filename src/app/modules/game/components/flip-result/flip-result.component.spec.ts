import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { Result } from '../../enums/result.enum';
import { FlipResultComponent } from './flip-result.component';

describe('FlipResultComponent', () => {
  let component: FlipResultComponent;
  let fixture: ComponentFixture<FlipResultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FlipResultComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#showResult', () => {
    it('should not show result message when Result.None is passed', () => {
      component.showResult('None');
      const resultElement = fixture.debugElement.query(By.css('.result'));

      expect(resultElement).toBeNull();
    });

    it('should show nothing message when Result.Wrong is passed', () => {
      component.showResult('Wrong');
      const resultElement = fixture.debugElement.query(By.css('.result'));
      fixture.detectChanges();

      expect(resultElement.nativeElement.textContent.trim()).toEqual('');
    });

    it('should show "Correct" message when Result.Correct is passed', () => {
      component.showResult('Correct');
      const resultElement = fixture.debugElement.query(By.css('.result'));
      fixture.detectChanges();

      expect(resultElement.nativeElement.textContent.trim()).toEqual(
        'Correct!',
      );
      expect(resultElement.classes.correct).toBeTruthy();
    });

    it('should show "Congrats" message when Result.Finish is passed', () => {
      component.showResult('Finish');
      const resultElement = fixture.debugElement.query(By.css('.result'));
      fixture.detectChanges();

      expect(resultElement.nativeElement.textContent.trim()).toEqual(
        `Congrats!\nYou've finished!!`,
      );
      expect(resultElement.classes.finish).toBeTruthy();
    });
  });
});
