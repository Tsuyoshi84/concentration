import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GameProgressComponent } from './game-progress.component';

describe('GameProgressComponent', () => {
  let component: GameProgressComponent;
  let fixture: ComponentFixture<GameProgressComponent>;
  let flippingEl: DebugElement;
  const expectedNumOfFlipping = 10;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GameProgressComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameProgressComponent);
    component = fixture.componentInstance;
    const scoreEl = fixture.debugElement.query(By.css('.score'));
    flippingEl = scoreEl.query(By.css('.flipping'));

    component.numOfTry = expectedNumOfFlipping;
    component.gameStatus = 'Playing';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show scores', () => {
    expect(flippingEl.nativeElement.textContent).toBe('めくり回数: 10');
  });
});