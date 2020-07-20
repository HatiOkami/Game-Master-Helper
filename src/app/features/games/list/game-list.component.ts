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
    const cardSize = 19 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    const navigationSize = 7 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    const totalCardsSize = gamesNumber * cardSize;
    const disponibleWidth = innerWidth - navigationSize;
    const remainder = disponibleWidth - Math.floor(totalCardsSize / disponibleWidth) * cardSize;
    const total = Math.floor(remainder / cardSize);
    return total > 1 ? total : 2;
  }

  private dummyCreation(gamesNumber: number) {
    this.dummy = Array(this.dummyCalculation(gamesNumber))
      .fill('')
      .map((x, i) => i);
  }

  private onWindowSize() {
    this.dummyCreation(this.games.length);
  }

  public goTo() {
    this.router.navigate(['games/add']);
  }
}
