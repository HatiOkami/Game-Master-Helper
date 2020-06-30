import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { GamePersonalComponent } from './personal.component';

describe('GamePersonalComponent', () => {
  const createComponent = createRoutingFactory({
    component: GamePersonalComponent,
  });

  let spectator: SpectatorRouting<GamePersonalComponent>;

  beforeEach(() => (spectator = createComponent()));

  it('should create the personal component for games feature ', () => {
    const gPersonal = spectator.component;
    expect(gPersonal).toBeTruthy();
  });
});
