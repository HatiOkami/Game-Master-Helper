import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

import GenreMock from '../../../../assets/mock-json/genre.mock.json';
import ThemeMock from '../../../../assets/mock-json/theme.mock.json';
import { DataListItem, Game } from '../../../model/entities';
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
  get isEdit() {
    return this.isCreation || this.editing;
  }

  public game: Game;
  public gameForm: GameForm;
  public genre: DataListItem[] = GenreMock;
  public theme: DataListItem[] = ThemeMock;

  private editing = false;
  private formMode: string = FORM_MODE.CONSULTATION;

  constructor(private gameService: GameService, private route: ActivatedRoute, private router: Router) {
    super();
  }

  public editForm() {
    this.editing = true;
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  ngOnInit() {
    this.route.data.pipe(takeUntil(this.destroyed$)).subscribe(routeDatas => {
      this.formMode = routeDatas.formMode;
      this.game = this.getInstance(routeDatas.id);
      this.initForm();
    });
  }

  public validForm() {
    this.editing = false;
  }

  private getInstance(id: number): Game {
    if (id) {
      this.gameService
        .getGame(id)
        .pipe(takeUntil(this.destroyed$))
        .subscribe(data => {
          return this.gameService.createInstance(data);
        });
    } else {
      return this.gameService.createInstance();
    }
  }

  private initForm() {
    this.gameForm = new GameForm(this.game);
  }
}
