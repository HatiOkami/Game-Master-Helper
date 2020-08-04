import { Component, ElementRef, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { ModalService } from './modal.service';


@Component({
  selector: 'gm-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit, OnDestroy {

  get isOpened(): boolean {
    return this.element.style.display === this.displayOpened;
  }
  @Input() id: string;

  private readonly displayClosed = 'none';
  private readonly displayOpened = 'block';
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  close(): void {
    this.element.style.display = this.displayClosed;
    document.body.classList.remove('gm-modal--open');
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  ngOnInit(): void {
    if (!this.id) {
      return;
    }

    document.body.appendChild(this.element);

    this.modalService.add(this);
  }

  open(): void {
    this.element.style.display = this.displayOpened;
    document.body.classList.add('gm-modal--open');
  }
}
