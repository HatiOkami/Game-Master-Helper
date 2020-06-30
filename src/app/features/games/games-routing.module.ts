import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameInformationComponent } from './information/information.component';
import { GamePersonalComponent } from './personal/personal.component';
import { GamePublishedComponent } from './published/published.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'published',
        component: GamePublishedComponent,
      },
      {
        path: 'my-games',
        component: GamePersonalComponent,
      },
      {
        path: ':id',
        component: GameInformationComponent,
      },
      {
        path: 'add',
        component: GameInformationComponent,
      },
      {
        path: ':id/edit',
        component: GameInformationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
