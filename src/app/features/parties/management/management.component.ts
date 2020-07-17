import { Component } from '@angular/core';
import { ModalProps } from 'src/app/shared/component/modal/modal-props.entity';
import { ModalService } from 'src/app/shared/component/modal/modal.service';

@Component({
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
})
export class PartiesManagementComponent {
  public candidates = [1, 2, 3];
  public isCreationMode = true;
  public players = [1, 2, 3];

  constructor(private modalSrv: ModalService) {}

  public closeInvitationalModal() {
    this.modalSrv.close('invitational-modal');
  }

  public openInvitational() {
    this.modalSrv.open('invitational-modal');
  }
}
