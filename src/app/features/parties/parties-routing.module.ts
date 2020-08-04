import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import FORM_MODE from '../../shared/constants/form-mode';
import { GameResolver } from '../../shared/resolvers/game.resolver';

import { PartiesManagementComponent } from './management/management.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':gameId/management',
        component: PartiesManagementComponent,
        data: {
          formMode: FORM_MODE.CREATION,
        },
        resolve: {
          game: GameResolver,
        },
      },
      {
        path: ':gameId/management/:id',
        component: PartiesManagementComponent,
        data: {
          formMode: FORM_MODE.EDITION,
        },
        resolve: {
          game: GameResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartiesRoutingModule {}
