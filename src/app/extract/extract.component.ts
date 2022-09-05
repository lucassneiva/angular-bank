import { TransferService } from './../services/transferService.service';
import { Component, OnInit } from '@angular/core';
import { Transfer } from 'model/transfer.model';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  transfers: any[];

  constructor(private service: TransferService) {}

  ngOnInit(): void {
    this.service.getAllTransfers().subscribe((transfers: Transfer[]) => {
      console.table(transfers);
      this.transfers = transfers;
    });
  }

}
