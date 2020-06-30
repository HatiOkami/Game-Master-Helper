import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { GameRouterComponent } from './re-router.component';

describe('RenameComponent', () => {
  const createComponent = createRoutingFactory({
    component: GameRouterComponent,
  });

  let spectator: SpectatorRouting<GameRouterComponent>;

  beforeEach(() => (spectator = createComponent()));

  it('should create the re-router component for games feature', () => {
    const gRouter = spectator.component;
    expect(gRouter).toBeTruthy();
  });
});
