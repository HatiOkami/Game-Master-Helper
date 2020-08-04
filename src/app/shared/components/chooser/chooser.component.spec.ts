import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { ChooserComponent } from './chooser.component';

describe('ChooserComponent', () => {
  const createComponent = createRoutingFactory({
    component: ChooserComponent,
  });

  let spectator: SpectatorRouting<ChooserComponent>;

  beforeEach(() => (spectator = createComponent()));

  it('should create the list chooser micro-component', () => {
    const chooser = spectator.component;
    expect(chooser).toBeTruthy();
  });
});
