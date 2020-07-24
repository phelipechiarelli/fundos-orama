import { Component, Output, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-foundation/modal';

@Component({
  selector: 'app-modal-body',
  templateUrl: './modal-body.component.html',
  styleUrls: ['./modal-body.component.scss']
})
export class ModalBodyComponent {
  title: string;
  message: string;
  options: string;

  constructor(public bsModalRef: BsModalRef) { }

  closeModal() {
    this.bsModalRef.hide();
  }
}
