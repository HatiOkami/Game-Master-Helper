import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  const createComponent = createRoutingFactory({
    component: CardComponent,
  });

  let spectator: SpectatorRouting<CardComponent>;

  beforeEach(() => (spectator = createComponent()));

  it('should create the card micro component', () => {
    const card = spectator.component;
    expect(card).toBeTruthy();
  });
});
