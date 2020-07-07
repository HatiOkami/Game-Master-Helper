import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameEditComponent } from './edit/game-edit.component';
import { GameListComponent } from './list/game-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: GameListComponent,
      },
      {
        path: ':id',
        component: GameEditComponent,
      },
      {
        path: 'add',
        component: GameEditComponent,
      },
      {
        path: ':id/edit',
        component: GameEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
