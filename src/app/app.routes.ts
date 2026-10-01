import { type Routes } from '@angular/router';
import { TopComponent } from './modules/game/components/top.component';
import { GameService } from './modules/game/services/game.service';

export const routes: Routes = [
  {
    path: '',
    component: TopComponent,
  },
  {
    path: 'game/:level',
    loadComponent: () =>
      import('./modules/game/components/game.component').then(
        (m) => m.GameComponent,
      ),
    providers: [GameService],
  },
  { path: '**', redirectTo: '' },
];
