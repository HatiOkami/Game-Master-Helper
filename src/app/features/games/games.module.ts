import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { GameEditComponent } from './edit/game-edit.component';
import { GamesRoutingModule } from './games-routing.module';
import { CardComponent } from './list/card/card.component';
import { GameListComponent } from './list/game-list.component';

@NgModule({
  declarations: [CardComponent, GameEditComponent, GameListComponent],
  imports: [GamesRoutingModule, SharedModule],
  providers: [],
})
export class GamesModule {}
