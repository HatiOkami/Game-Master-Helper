import { forwardRef, Component, ElementRef, HostListener, Input, OnDestroy, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { DataListItem } from '../../../model/entities';
import { withDestroy } from '../../mixins/with-destroy.mixin';

@Component({
  selector: 'gm-chooser',
  templateUrl: './chooser.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChooserComponent),
      multi: true,
    },
  ],
})
export class ChooserComponent extends withDestroy() implements ControlValueAccessor, OnDestroy {
  get currentValues(): any[] {
    return this.currentValues$.value || [];
  }

  get labels(): string[] {
    const a = this.sourceItems
      .filter((item: DataListItem) => this.currentValues.findIndex((cv: DataListItem) => cv.id === item.id) !== -1)
      .map(item => item.name);
    return a;
  }

  get sourceItems(): any[] {
    return this.dataSource || [];
  }

  @Input() dataSource: DataListItem[];
  @Input() editMode = false;
  public isPanelOpened = false;
  @ViewChild('panel')
  panelRef: ElementRef;
  @ViewChild('values')
  valuesRef: ElementRef;

  private currentValues$: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);

  constructor() {
    super();
  }

  public clear() {
    this.writeValue([]);
  }

  public clickItem(item: DataListItem) {
    const fn = (): [any[], () => void] => {
      if (this.isInCurrentValues(item)) {
        return [this.currentValues.filter(val => val.id !== item.id), () => {}];
      }

      return [[...this.currentValues, item], () => {}];
    };

    const [newValue] = fn();

    this.writeValue(newValue);
  }

  @HostListener('document:click', ['$event.target'])
  public clickOnDocument(targetElement: ElementRef) {
    if (this.editMode) {
      const clickOnValues = this.valuesRef.nativeElement.contains(targetElement);
      const clickOnPanel = this.panelRef.nativeElement.contains(targetElement);

      if (clickOnValues) {
        this.openPanel();
      } else if (!clickOnPanel) {
        this.closePanel();
      }
    }
  }

  public getItemLabel(item: DataListItem) {
    return item.name || 'Label incorrecte';
  }

  public isInCurrentValues(item: DataListItem) {
    return this.currentValues.findIndex((cv: DataListItem) => cv.id === item.id) !== -1;
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  registerOnChange(fn: any): void {
    this.currentValues$.pipe(takeUntil(this.destroyed$)).subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public togglePanel() {
    this.isPanelOpened ? this.closePanel() : this.openPanel();
  }

  public writeValue(value: any): void {
    this.currentValues$.next(value);
  }

  private closePanel() {
    this.isPanelOpened = false;
  }

  private openPanel() {
    this.isPanelOpened = true;
  }
}
