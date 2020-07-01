import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { BallotBoxComponent } from './ballot-box.component';

describe('BallotBoxComponent', () => {
  const createComponent = createRoutingFactory({
    component: BallotBoxComponent,
  });

  let spectator: SpectatorRouting<BallotBoxComponent>;

  beforeEach(() => (spectator = createComponent()));

  it('should create the ballot-box micro component', () => {
    const ballotBox = spectator.component;
    expect(ballotBox).toBeTruthy();
  });
});
