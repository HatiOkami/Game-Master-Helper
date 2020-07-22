import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import FORM_MODE from '../../shared/constants/form-mode';

import { PartiesManagementComponent } from './management/management.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'management',
        component: PartiesManagementComponent,
        data: {
          formMode: FORM_MODE.CREATION,
        },
      },
      {
        path: 'management/:id',
        component: PartiesManagementComponent,
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
export class PartiesRoutingModule {}
