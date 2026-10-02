import { DebugElement } from '@angular/core';
import { type ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GameProgressComponent } from './game-progress.component';

describe('GameProgressComponent', () => {
  let component: GameProgressComponent;
  let fixture: ComponentFixture<GameProgressComponent>;
  let scoreEl: DebugElement;
  const expectedNumOfFlipping = 10;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameProgressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameProgressComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('numOfTry', expectedNumOfFlipping);
    fixture.componentRef.setInput('gameStatus', 'Playing');
    fixture.detectChanges();
    await fixture.whenStable();

    scoreEl = fixture.debugElement.query(By.css('.score'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show scores', () => {
    expect(scoreEl.nativeElement.textContent).toBe('Attempt: 10');
  });
});
