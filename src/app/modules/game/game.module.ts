import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GameRoutingModule } from './game-routing.module';
import { TopComponent } from './components/top/top.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GameComponent } from './components/game/game.component';
import { CardComponent } from './components/card/card.component';
import { GameService } from './services/game/game.service';
import { FlipResultComponent } from './components/flip-result/flip-result.component';
import { GameProgressComponent } from './components/game-progress/game-progress.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GameRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    TopComponent,
    CardListComponent,
    GameComponent,
    CardComponent,
    FlipResultComponent,
    GameProgressComponent,
  ],
  exports: [GameComponent],
  providers: [GameService],
})
export class GameModule {}
