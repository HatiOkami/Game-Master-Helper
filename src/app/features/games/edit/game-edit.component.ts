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
      this.getInstance(+this.route.snapshot.params.id);
      this.initForm();
    });
  }

  public validForm() {
    this.editing = false;
    this.gameService
      .saveGame(this.game)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(id => {
        this.editing = false;
        this.router.navigate([id.toString()], { relativeTo: this.route });
      });
  }

  private getInstance(id: number) {
    if (id) {
      this.gameService
        .getGame(id)
        .pipe(takeUntil(this.destroyed$))
        .subscribe(data => {
          this.game = this.gameService.createInstance(data);
        });
    } else {
      this.game = this.gameService.createInstance();
    }
  }

  private initForm() {
    this.gameForm = new GameForm(this.game);
  }
}
