import { Component, EventEmitter, Output } from '@angular/core';
import { TransferService } from '../services/transferService.service';
import { Transfer } from 'model/transfer.model';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  value: string;
  destination_account: string;
  transfersList: any[] = [];

  constructor(private service: TransferService) {}

  sendTransfer() {
    console.log('New transfer pending');
    const obj: Transfer = {
      value: this.value,
      destination_account: this.destination_account,
    };
    this.service.createNewTransfer(obj).subscribe(
      (res) => {
        console.log(res);
        this.cleanForm();
      },
      (err) => console.log(err)
    );
  }

  cleanForm() {
    this.value = '';
    this.destination_account = '';
  }
}
