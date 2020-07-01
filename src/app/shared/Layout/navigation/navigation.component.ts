import { Component } from '@angular/core';

@Component({
  selector: 'gm-nav',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  public isOpen = false;
  constructor() {}

  public switchNav() {
    this.isOpen = !this.isOpen;
  }
}
