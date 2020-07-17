import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', redirectTo: '/home', pathMatch: 'full' },
  { path: 'games', loadChildren: () => import('./features/games/games.module').then(m => m.GamesModule) },
  { path: 'parties', loadChildren: () => import('./features/parties/parties.module').then(m => m.PartiesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
