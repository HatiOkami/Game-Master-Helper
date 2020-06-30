import { Injector, NgModule } from '@angular/core';

import { AliasInjector } from './alias-injector';
import { baseProviders } from './service-providers';

@NgModule({
  providers: baseProviders
})
export class ServiceModule {
  public constructor(parent: Injector) {
    AliasInjector.createAliases(parent, baseProviders);
  }
}
