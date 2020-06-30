import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigurationService } from './shared/services/env-configuration.service';
import { ENV_CONFIG } from './shared/environment';

function configurationInit(config: ConfigurationService) {
  return () => config.init();
}

function getConfiguration(config: ConfigurationService) {
  return config.getConfigurationUrl();
}

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configurationInit,
      deps: [ConfigurationService],
      multi: true,
    },
    { provide: ENV_CONFIG, useFactory: getConfiguration, deps: [ConfigurationService] },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
