import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  const createComponent = createRoutingFactory({
    component: HeaderComponent,
  });

  let spectator: SpectatorRouting<HeaderComponent>;

  beforeEach(() => (spectator = createComponent()));

  it('should create the header component', () => {
    const admin = spectator.component;
    expect(admin).toBeTruthy();
  });
});
