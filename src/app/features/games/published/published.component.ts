import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '',
  templateUrl: './published.component.html',
})
export class GamePublishedComponent {
  constructor(private router: Router) {}

  public openGame(id: string) {
    this.router.navigate([`/games/'${id}'`]);
  }
}
