import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GameModule } from './modules/game/game.module';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, GameModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
