import { Injectable } from '@angular/core';
import { HttpApiService } from 'src/app/shared/services/http-api.service';

import { Adjective, Game } from '../../model/entities';
import { EntityService } from '../entity.service';

@Injectable()
export class GameService extends EntityService<Game> {
  public static readonly alias = 'gameService';

  constructor(private httpApi: HttpApiService) {
    super();
    this.servicePrefix = 'games';
  }

  protected _createInstance(data: Game): Game {
    return Object.assign(this._getDefaultData(), {
      id: data.id,
      title: data.title,
      description: data.description,
      image: data.image,
      adjectives: data.adjectives,
    });
  }

  protected _getDefaultData(): Game {
    return {
      id: null,
      title: null,
      description: null,
      image: null,
      adjectives: new Object() as Adjective,
    };
  }
}
