import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PartiesManagementComponent } from './management/management.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'management',
        component: PartiesManagementComponent,
      },
      {
        path: 'management/:id',
        component: PartiesManagementComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartiesRoutingModule {}
