import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Adjective } from 'src/app/model/entities';

@Component({
  selector: 'gm-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Output() action = new EventEmitter();
  @Input() adds: Adjective;
  @Input() background: string;
  @Input() body: string;
  @Input() title: string;

  constructor() {}
}
