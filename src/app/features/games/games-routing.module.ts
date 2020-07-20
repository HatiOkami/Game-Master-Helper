import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import FORM_MODE from '../../shared/constants/form-mode';

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
        path: 'add',
        component: GameEditComponent,
        data: {
          formMode: FORM_MODE.CREATION,
        },
      },
      {
        path: ':id',
        component: GameEditComponent,
        data: {
          formMode: FORM_MODE.CONSULTATION,
        },
      },
      {
        path: ':id/edit',
        component: GameEditComponent,
        data: {
          formMode: FORM_MODE.EDITION,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
