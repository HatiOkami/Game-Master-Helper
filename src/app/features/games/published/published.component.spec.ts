import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { GamePublishedComponent } from './published.component';

describe('GamePublishedComponent', () => {
  const createComponent = createRoutingFactory({
    component: GamePublishedComponent,
  });

  let spectator: SpectatorRouting<GamePublishedComponent>;

  beforeEach(() => (spectator = createComponent()));

  it('should create the published component for games feature', () => {
    const gPublished = spectator.component;
    expect(gPublished).toBeTruthy();
  });
});
