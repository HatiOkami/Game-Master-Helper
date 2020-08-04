import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  const createComponent = createRoutingFactory({
    component: NavigationComponent,
  });

  let spectator: SpectatorRouting<NavigationComponent>;

  beforeEach(() => (spectator = createComponent()));

  it('should create the navigation component', () => {
    const admin = spectator.component;
    expect(admin).toBeTruthy();
  });
});
