import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { withDestroy } from '../../mixins/with-destroy.mixin';

@Component({
  selector: 'gm-nav',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent extends withDestroy() implements OnInit, OnDestroy {
  public isOpen = false;

  constructor(private router: Router) {
    super();
  }

  public goTo(uri: string) {
    this.router.navigate([`/${uri}`]);
    this.isOpen = false;
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onWindowScroll.bind(this), true);
    window.removeEventListener('click', this.onWindowClick.bind(this), true);
    super.ngOnDestroy();
  }

  ngOnInit() {
    window.addEventListener('scroll', this.onWindowScroll.bind(this), true);
    window.addEventListener('click', this.onWindowClick.bind(this), true);
  }

  public switchNav() {
    this.isOpen = !this.isOpen;
  }

  private checkAncestorClass(element, classname) {
    if (element.className.split(' ').indexOf(classname) >= 0) {
      return true;
    }
    return element.parentElement && this.checkAncestorClass(element.parentElement, classname);
  }

  private onWindowClick($event: any) {
    if (!this.checkAncestorClass($event.srcElement, 'gm-nav')) {
      this.isOpen = false;
    }
  }

  private onWindowScroll() {
    this.isOpen = false;
  }
}
