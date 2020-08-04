import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

import { Game } from '../../model/entities';
import { GameService } from '../../services';

@Injectable()
export class GameResolver implements Resolve<Game> {
  constructor(private gameService: GameService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Game> {
    return this.gameService.getGame(+route.paramMap.get('gameId'));
  }
}
