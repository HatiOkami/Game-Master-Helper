import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpApiService } from 'src/app/shared/services/http-api.service';

import Mock from '../../../assets/mock-json/games-edit.mock.json';
import { Adjective, Game } from '../../model/entities';
import { EntityService } from '../entity.service';

@Injectable()
export class GameService extends EntityService<Game> {
  public static readonly alias = 'gameService';

  constructor(private httpApi: HttpApiService) {
    super();
    this.servicePrefix = 'games';
  }

  public getGame(gameId: number): Observable<Game> {
    // return this.httpApi.get(this.servicePrefix, gameId);
    return of(Mock);
  }

  public saveGame(game: Game): Observable<number> {
    if (game.id !== 0) {
      return this.httpApi.put(`${this.servicePrefix}/${game.id}`, game);
    } else {
      return this.httpApi.post(this.servicePrefix, game);
    }
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
