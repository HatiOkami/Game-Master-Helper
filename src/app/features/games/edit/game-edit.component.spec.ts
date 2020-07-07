import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { GameEditComponent } from './game-edit.component';

describe('GameEditComponent', () => {
  const createComponent = createRoutingFactory({
    component: GameEditComponent,
  });

  let spectator: SpectatorRouting<GameEditComponent>;

  beforeEach(() => (spectator = createComponent()));

  it('should create the edit component for games feature', () => {
    const edit = spectator.component;
    expect(edit).toBeTruthy();
  });
});
