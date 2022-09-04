import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private transfersList: any[];

  constructor() {
    this.transfersList = [];
  }

  get transfers() {
    return this.transfersList;
  }

  createNewTransfer(transfer: any) {
    this.hydrate(transfer);
    this.transfersList.push(transfer);
  }

  private hydrate(transfer: any) {
    transfer.date = new Date();
  }
}
