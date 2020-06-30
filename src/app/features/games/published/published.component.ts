import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Game } from '../../../model/entities';

@Component({
  selector: '',
  templateUrl: './published.component.html',
})
export class GamePublishedComponent implements OnInit {
  public games: Game[] = [];
  constructor(private router: Router) {}

  ngOnInit() {
    const gameTest = new Object({
      id: 1,
      title: 'test carte',
      description: 'ceci est une courte description pour tester les cartes de jeux',
      adjectives: ['test', 'test2'],
      image: null,
    }) as Game;
    this.games.push(gameTest);
  }

  public openGame(id: string) {
    this.router.navigate([`/games/'${id}'`]);
  }
}
