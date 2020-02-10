import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
