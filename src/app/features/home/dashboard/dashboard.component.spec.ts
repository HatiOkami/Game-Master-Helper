import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  const createComponent = createRoutingFactory({
    component: DashboardComponent,
  });

  let spectator: SpectatorRouting<DashboardComponent>;

  beforeEach(() => (spectator = createComponent()));

  it('should create the dashboard component for main page', () => {
    const dash = spectator.component;
    expect(dash).toBeTruthy();
  });
});
