import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { GameControllerComponent } from '../game-controller/game-controller.component';
import { GameProgressComponent } from '../game-progress/game-progress.component';
import { FlipResultComponent } from '../flip-result/flip-result.component';
import { CardListComponent } from '../card-list/card-list.component';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatSelectModule,
  MatGridListModule
} from '@angular/material';
import { CardComponent } from '../card/card.component';
import { GameService } from '../../services/game/game.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatButtonModule,
        MatSelectModule,
        MatGridListModule,
        BrowserAnimationsModule
      ],
      declarations: [
        GameComponent,
        GameControllerComponent,
        GameProgressComponent,
        FlipResultComponent,
        CardListComponent,
        CardComponent
      ],
      providers: [GameService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
