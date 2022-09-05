import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transfer } from 'model/transfer.model';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private transfersList: any[];
  private endpoint = 'http://localhost:3000/transfersAPI'

  constructor(private httpClient: HttpClient) {
    this.transfersList = [];
  }

  get transfers() {
    return this.transfersList;
  }

  getAllTransfers(): Observable<Transfer[]> {
    return this.httpClient.get<Transfer[]>(this.endpoint);
  }

  createNewTransfer(transfer: any) {
    this.hydrate(transfer);
    this.transfersList.push(transfer);
  }

  private hydrate(transfer: any) {
    transfer.date = new Date();
  }
}
