import { Component, OnDestroy, OnInit } from '@angular/core';

import { withDestroy } from './shared/mixins/with-destroy.mixin';
import { LooKey } from './shared/utils/looKey';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends withDestroy() implements OnInit, OnDestroy {
  public start = false;
  title = 'Game-Master-Helper';
  private keyList = [];

  constructor() {
    super();
  }

  keyup = ($event: any): void => {
    this.keyList = LooKey.karaOwaru($event, this.keyList);
    if (this.keyList.length === 11) {
      this.start = true;
    } else {
      this.start = false;
    }
  };

  ngOnDestroy() {
    window.removeEventListener('keyup', this.keyup, true);
    super.ngOnDestroy();
  }

  ngOnInit() {
    window.addEventListener('keyup', this.keyup, true);
  }
}
