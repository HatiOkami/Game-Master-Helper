import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

// tslint:disable-next-line: variable-name
export function withDestroy(BaseClass: any = (class {} as any)) {
  return class extends BaseClass implements OnDestroy {
    protected destroyed$: Subject<boolean> = new Subject<boolean>();

    ngOnDestroy() {
      this.destroyed$.next(true);
      this.destroyed$.unsubscribe();
    }
  };
}
