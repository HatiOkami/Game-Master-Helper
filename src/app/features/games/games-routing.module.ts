import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameInformationComponent } from './information/information.component';
import { GamePersonalComponent } from './personal/personal.component';
import { GamePublishedComponent } from './published/published.component';
import { GameRouterComponent } from './re-router/re-router.component';

const routes: Routes = [
  {
    path: '',
    component: GameRouterComponent,
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
        path: 'games/:id',
        component: GameInformationComponent,
      },
      {
        path: 'games/add',
        component: GameInformationComponent,
      },
      {
        path: 'games/:id/edit',
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
