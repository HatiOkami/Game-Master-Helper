import { ModuleWithProviders, NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [],
  imports: [HomeRoutingModule, SharedModule],
  providers: [],
})
export class HomeModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: HomeModule,
    };
  }
}
