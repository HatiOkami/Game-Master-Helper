import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { withDestroy } from 'src/app/shared/mixins/with-destroy.mixin';

import GamesMock from '../../../../assets/mock-json/games-list-mock.json';
import { Game } from '../../../model/entities';

@Component({
  selector: '',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent extends withDestroy() implements OnInit, OnDestroy {
  public dummy: number[];
  public games: Game[] = [];

  constructor(private router: Router) {
    super();
  }

  public createGame() {
    this.router.navigate(['games/add']);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onWindowSize.bind(this), true);
    super.ngOnDestroy();
  }

  ngOnInit() {
    this.games = GamesMock;
    window.addEventListener('resize', this.onWindowSize.bind(this), true);
    this.dummyCreation(this.games.length);
  }

  public openGame(id: string) {
    this.router.navigate([`/games/${id}`]);
  }

  private dummyCalculation(gamesNumber: number): number {
    const innerWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const navigationSize = 7 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    const disponibleWidth = innerWidth - navigationSize;
    const cardSize = 20 * parseFloat(getComputedStyle(document.documentElement).fontSize);

    const cardNumberByScreenWidth = Math.floor(disponibleWidth / cardSize);
    const nbLine = Math.ceil(gamesNumber / cardNumberByScreenWidth);
    const nbCArdWithDUmmy = nbLine * cardNumberByScreenWidth;
    const total = nbCArdWithDUmmy - gamesNumber;

    return total;
  }

  private dummyCreation(gamesNumber: number) {
    this.dummy = Array(this.dummyCalculation(gamesNumber))
      .fill('')
      .map((x, i) => i);
  }

  private onWindowSize() {
    this.dummyCreation(this.games.length);
  }
}
