import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import GenreMock from '../../../../assets/mock-json/genre.mock.json';
import ThemeMock from '../../../../assets/mock-json/theme.mock.json';
import { DataListItem } from '../../../model/entities';
import { GameForm } from '../../../model/forms';
import { GameService } from '../../../services/games';
import FORM_MODE from '../../../shared/constants/form-mode';
import { withDestroy } from '../../../shared/mixins/with-destroy.mixin';

@Component({
  selector: 'gm-game-information',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.scss'],
})
export class GameEditComponent extends withDestroy() implements OnInit, OnDestroy {
  get isCreation() {
    return this.formMode === FORM_MODE.CREATION;
  }

  public gameForm: GameForm;
  public genre: DataListItem[] = GenreMock;
  public theme: DataListItem[] = ThemeMock;

  private formMode: string = FORM_MODE.CONSULTATION;

  constructor(private gameService: GameService, private route: ActivatedRoute, private router: Router) {
    super();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  ngOnInit() {
    this.route.data.pipe(takeUntil(this.destroyed$)).subscribe(routeDatas => {
      this.formMode = routeDatas.formMode;
      this.game = this.gameService.createInstance();
      this.initForm();
    });
  }

  private initForm() {
    this.gameForm = new GameForm(this.game);
  }
}
