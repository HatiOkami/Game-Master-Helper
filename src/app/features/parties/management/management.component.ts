import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { takeUntil } from 'rxjs/operators';

import UsersMock from '../../../../assets/mock-json/users.mock.json';
import { withDestroy } from '../../..//shared/mixins/with-destroy.mixin';
import { PartyUser, User } from '../../../model/entities';
import { Party } from '../../../model/entities';
import { PartyForm } from '../../../model/forms';
import { ModalService } from '../../../shared/component/modal/modal.service';
import FORM_MODE from '../../../shared/constants/form-mode';

@Component({
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
})
export class PartiesManagementComponent extends withDestroy() implements OnInit, OnDestroy, AfterViewInit {
  get isCreation() {
    return this.formMode === FORM_MODE.CREATION;
  }

  get isPrivate() {
    return this.party?.isPrivate;
  }

  public candidates = [1, 2, 3];
  public contactList: User[] = [];
  @ViewChild('ngxDatatable') ngxDatatable: DatatableComponent;
  public party: Party;
  public partyForm: PartyForm;
  public players: PartyUser[] = [];
  public selectedContact: User[] = [];
  public selectionType = SelectionType;

  private formMode: string = FORM_MODE.CONSULTATION;

  constructor(private modalSrv: ModalService, private route: ActivatedRoute) {
    super();
  }

  public addContactsToPlayers() {
    this.players = [...(this.selectedContact as PartyUser[])];
    this.closeInvitationalModal();
  }

  public cancelInvitationalModal() {
    this.selectedContact = [...this.players];
    this.closeInvitationalModal();
  }

  public getRowClass() {
    return 'clickable';
  }

  ngAfterViewInit() {
    if (this.ngxDatatable) {
      this.ngxDatatable.columnMode = ColumnMode.force;
    }
  }

  ngOnInit() {
    this.contactList = UsersMock;
    this.route.data.pipe(takeUntil(this.destroyed$)).subscribe(routeDatas => {
      this.formMode = routeDatas.formMode;
    });
  }

  public openInvitational() {
    this.modalSrv.open('invitational-modal');
  }

  public selectContact(dataTableList: any) {
    this.selectedContact.splice(0, this.selectedContact.length);
    this.selectedContact.push(...dataTableList.selected);
  }

  private closeInvitationalModal() {
    this.modalSrv.close('invitational-modal');
  }

  private initForm() {
    this.partyForm = new PartyForm(this.party);
  }
}
