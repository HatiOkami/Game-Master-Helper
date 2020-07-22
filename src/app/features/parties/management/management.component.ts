import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
export class PartiesManagementComponent extends withDestroy() implements OnInit, OnDestroy {
  get isCreation() {
    return this.formMode === FORM_MODE.CREATION;
  }

  // get isPrivate() {
  //   return this.formMode !== FORM_MODE.CREATION && this.party;
  // }

  public candidates = [1, 2, 3];
  public contactList: User[] = [];
  public party: Party;
  public partyForm: PartyForm;
  public players: PartyUser[] = [];
  public selectedContact: User[] = [];

  private formMode: string = FORM_MODE.CONSULTATION;

  constructor(private modalSrv: ModalService, private route: ActivatedRoute) {
    super();
  }

  public addContactsToPlayers() {
    this.players = this.selectedContact as PartyUser[];
    this.closeInvitationalModal();
  }

  public closeInvitationalModal() {
    this.modalSrv.close('invitational-modal');
  }

  public isInSelectedContact(contact): boolean {
    const existingContact = this.selectedContact.findIndex(c => c.id === contact.id);
    return existingContact < 0 ? false : true;
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

  public selectContact(contact: User) {
    const existingContact = this.selectedContact.findIndex(c => c.id === contact.id);
    if (existingContact < 0) {
      this.selectedContact.push(contact);
    } else {
      this.selectedContact.splice(existingContact, 1);
    }
  }

  private initForm() {
    this.partyForm = new PartyForm(this.party);
  }
}
