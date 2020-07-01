import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { GameInformationComponent } from './information.component';

describe('InformationComponent', () => {
  const createComponent = createRoutingFactory({
    component: GameInformationComponent,
  });

  let spectator: SpectatorRouting<GameInformationComponent>;

  beforeEach(() => (spectator = createComponent()));

  it('should create the information component for games feature', () => {
    const gInformation = spectator.component;
    expect(gInformation).toBeTruthy();
  });
});
