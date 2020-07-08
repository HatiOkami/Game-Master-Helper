import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { JoinDataListPipe } from '../../pipes/join-data-list.pipe';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  const createComponent = createRoutingFactory({
    component: CardComponent,
    declarations: [JoinDataListPipe],
  });

  let spectator: SpectatorRouting<CardComponent>;

  beforeEach(() => (spectator = createComponent()));

  it('should create the card micro component', () => {
    const card = spectator.component;
    expect(card).toBeTruthy();
  });
});
