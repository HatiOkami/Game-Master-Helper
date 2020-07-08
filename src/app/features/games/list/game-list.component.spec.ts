import { NO_ERRORS_SCHEMA } from '@angular/core';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SharedModule } from 'src/app/shared/shared.module';

import { GameListComponent } from './game-list.component';

describe('GameListComponent', () => {
  const createComponent = createRoutingFactory({
    component: GameListComponent,
    schemas: [NO_ERRORS_SCHEMA],
    imports: [SharedModule]
  });

  let spectator: SpectatorRouting<GameListComponent>;

  beforeEach(() => (spectator = createComponent()));

  it('should create the list component for games feature', () => {
    const list = spectator.component;
    expect(list).toBeTruthy();
  });
});
