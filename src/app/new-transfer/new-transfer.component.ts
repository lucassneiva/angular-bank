import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() onTransfer = new EventEmitter<any>();

  valor: string;
  destino: string;

  sendTransfer() {
    console.log('New transfer pending');
    const obj = { valor: this.valor, destino: this.destino };
    this.onTransfer.emit(obj);
    this.cleanForm();
  }

  cleanForm(){
    this.valor = '';
    this.destino = '';
  }
}
