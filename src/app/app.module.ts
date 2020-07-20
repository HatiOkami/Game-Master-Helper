import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home/home.module';
import { ServiceModule } from './services/service.module';
import { ENV_CONFIG } from './shared/environment';
import { ConfigurationService } from './shared/services/env-configuration.service';
import { SharedModule } from './shared/shared.module';

function configurationInit(config: ConfigurationService) {
  return () => config.init();
}

function getConfiguration(config: ConfigurationService) {
  return config.getConfigurationUrl();
}

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, HomeModule.forRoot(), ServiceModule, SharedModule.forRoot()],
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
