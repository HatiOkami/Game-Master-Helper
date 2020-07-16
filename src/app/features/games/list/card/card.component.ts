import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Adjective } from 'src/app/model/entities';

@Component({
  selector: 'gm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Output() action = new EventEmitter();
  @Input() adds: Adjective;
  @Input() background: string;
  @Input() body: string;
  public class = 'card--presentation';
  @Input() id: number;
  @Input() title: string;

  constructor() {}

  public actionTrigger() {
    this.action.emit(this.id);
  }
}
