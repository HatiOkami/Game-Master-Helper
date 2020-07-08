import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SharedModule } from 'src/app/shared/shared.module';

import { GameEditComponent } from './game-edit.component';

describe('GameEditComponent', () => {
  const createComponent = createRoutingFactory({
    component: GameEditComponent,
    imports: [SharedModule],
  });

  let spectator: SpectatorRouting<GameEditComponent>;

  beforeEach(() => (spectator = createComponent()));

  it('should create the edit component for games feature', () => {
    const edit = spectator.component;
    expect(edit).toBeTruthy();
  });
});
