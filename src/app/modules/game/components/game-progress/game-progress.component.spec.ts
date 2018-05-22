import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProgressComponent } from './game-progress.component';
import { By } from '@angular/platform-browser';
import { GameStatus } from '../../enums/game-status.enum';
import { SimpleChange } from '@angular/core';

describe('GameProgressComponent', () => {
  let component: GameProgressComponent;
  let fixture: ComponentFixture<GameProgressComponent>;
  let flippingEl;
  let cheatingEl;
  let playBtn;
  const expectedNumOfFlipping = 10;
  const expectedNumOfCheating = 20;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameProgressComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameProgressComponent);
    component = fixture.componentInstance;
    const scoreEl = fixture.debugElement.query(By.css('.score'));
    flippingEl = scoreEl.query(By.css('.flipping'));
    cheatingEl = scoreEl.query(By.css('.cheating'));
    playBtn = fixture.debugElement.query(By.css('button'));

    component.numOfFlipping = expectedNumOfFlipping;
    component.numOfCheating = expectedNumOfCheating;
    component.gameStatus = GameStatus.Playing;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show scores', () => {
    expect(flippingEl.nativeElement.textContent).toBe('めくり回数: 10');
    expect(cheatingEl.nativeElement.textContent).toBe('カンニング: 20');
  });

  it('should show button label', () => {
    expect(playBtn.nativeElement.textContent).toBe('リスタート');

    component.ngOnChanges({
      gameStatus: new SimpleChange(GameStatus.Playing, GameStatus.Clear, false)
    });
    fixture.detectChanges();

    expect(playBtn.nativeElement.textContent).toBe('もう一度');
  });
});
