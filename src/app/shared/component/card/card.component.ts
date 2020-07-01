import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gm-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Output() action = new EventEmitter();
  @Input() adds: string[];
  @Input() backgorund: string;
  @Input() body: string;
  @Input() title: string;

  constructor() {}
}
