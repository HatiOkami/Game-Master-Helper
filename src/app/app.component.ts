import { Component, OnInit, OnDestroy } from '@angular/core';
import { LooKey } from './shared/utils/looKey';
import { withDestroy } from './shared/mixins/with-destroy.mixin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
