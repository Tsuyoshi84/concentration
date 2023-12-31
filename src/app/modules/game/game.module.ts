import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { FlipResultComponent } from './components/flip-result/flip-result.component';
import { GameProgressComponent } from './components/game-progress/game-progress.component';
import { GameComponent } from './components/game/game.component';
import { TopButtonComponent } from './components/top-button.component';
import { TopTitleComponent } from './components/top-title/top-title.component';
import { TopComponent } from './components/top/top.component';
import { GameRoutingModule } from './game-routing.module';
import { GameService } from './services/game.service';

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
    TopTitleComponent,
    TopButtonComponent,
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
