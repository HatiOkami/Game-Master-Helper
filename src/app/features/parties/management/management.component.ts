import { Component, OnInit } from '@angular/core';

import UsersMock from '../../../../assets/mock-json/users.mock.json';
import { PartyUser, User } from '../../../model/entities';
import { ModalService } from '../../../shared/component/modal/modal.service';

@Component({
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
})
export class PartiesManagementComponent implements OnInit {
  public candidates = [1, 2, 3];
  public contactList: User[] = [];
  public isCreationMode = true;
  public players: PartyUser[] = [];
  public selectedContact: User[] = [];

  constructor(private modalSrv: ModalService) {}

  public closeInvitationalModal() {
    this.modalSrv.close('invitational-modal');
  }

  public isInSelectedContact(contact): boolean {
    const existingContact = this.selectedContact.findIndex(c => c.id === contact.id);
    return existingContact < 0 ? false : true;
  }

  ngOnInit() {
    this.contactList = UsersMock;
    const a = 1;
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

  public addContactsToPlayers() {
    this.players = this.selectedContact as PartyUser[];
    this.closeInvitationalModal();
  }
}
