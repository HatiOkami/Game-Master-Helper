import { ModuleWithProviders, NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { GamesRoutingModule } from './games-routing.module';
import { GameInformationComponent } from './information/information.component';
import { GamePersonalComponent } from './personal/personal.component';
import { GamePublishedComponent } from './published/published.component';
import { GameRouterComponent } from './re-router/re-router.component';

@NgModule({
  declarations: [GameInformationComponent, GamePersonalComponent, GamePublishedComponent, GameRouterComponent],
  imports: [GamesRoutingModule, SharedModule],
  providers: [],
})
export class GamesModule {}
