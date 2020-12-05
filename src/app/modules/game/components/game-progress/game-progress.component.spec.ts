import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GameProgressComponent } from './game-progress.component';
import { By } from '@angular/platform-browser';
import { GameStatus } from '../../enums/game-status.enum';
import { DebugElement } from '@angular/core';

describe('GameProgressComponent', () => {
  let component: GameProgressComponent;
  let fixture: ComponentFixture<GameProgressComponent>;
  let flippingEl: DebugElement;
  let playBtn;
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
    playBtn = fixture.debugElement.query(By.css('button'));

    component.numOfTry = expectedNumOfFlipping;
    component.gameStatus = GameStatus.Playing;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show scores', () => {
    expect(flippingEl.nativeElement.textContent).toBe('めくり回数: 10');
  });
});
