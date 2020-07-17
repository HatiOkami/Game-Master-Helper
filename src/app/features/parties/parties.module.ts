import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { PartiesManagementComponent } from './management/management.component';
import { PartiesRoutingModule } from './parties-routing.module';

@NgModule({
  declarations: [PartiesManagementComponent],
  imports: [PartiesRoutingModule, SharedModule],
  providers: [],
})
export class PartiesModule {}
