import { NO_ERRORS_SCHEMA } from '@angular/core';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SharedModule } from 'src/app/shared/shared.module';

import { GamePublishedComponent } from './published.component';

describe('GamePublishedComponent', () => {
  const createComponent = createRoutingFactory({
    component: GamePublishedComponent,
    schemas: [NO_ERRORS_SCHEMA],
    imports: [SharedModule]
  });

  let spectator: SpectatorRouting<GamePublishedComponent>;

  beforeEach(() => (spectator = createComponent()));

  it('should create the published component for games feature', () => {
    const gPublished = spectator.component;
    expect(gPublished).toBeTruthy();
  });
});
