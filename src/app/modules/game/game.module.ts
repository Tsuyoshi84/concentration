import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { CardListComponent } from './components/card-list/card-list.component';
import { GameComponent } from './components/game/game.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  declarations: [CardListComponent, GameComponent, CardComponent],
  exports: [GameComponent]
})
export class GameModule { }
