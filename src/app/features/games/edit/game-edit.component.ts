import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataListItem } from 'src/app/model/entities';

import GenreMock from '../../../../assets/mock-json/genre.mock.json';

@Component({
  selector: 'gm-game-information',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.scss'],
})
export class GameEditComponent {
  public genre: DataListItem[] = GenreMock;

  public genreForm = new FormGroup({ genres: new FormControl([{ id: 1, name: 'action' }]) });
  constructor() {}
}
