import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatSelectModule,
  MatGridListModule
} from '@angular/material';

import { GameRoutingModule } from './game-routing.module';
import { CardListComponent } from './components/card-list/card-list.component';
import { GameComponent } from './components/game/game.component';
import { CardComponent } from './components/card/card.component';
import { GameService } from './services/game/game.service';
import { FlipResultComponent } from './components/flip-result/flip-result.component';
import { GameControllerComponent } from './components/game-controller/game-controller.component';
import { GameProgressComponent } from './components/game-progress/game-progress.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GameRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatGridListModule
  ],
  declarations: [
    CardListComponent,
    GameComponent,
    CardComponent,
    FlipResultComponent,
    GameControllerComponent,
    GameProgressComponent
  ],
  exports: [GameComponent],
  providers: [GameService]
})
export class GameModule {}
