import { Pipe, PipeTransform } from '@angular/core';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { CardComponent } from './card.component';
import { JoinDataListPipe } from '../../pipes/join-data-list.pipe';

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
