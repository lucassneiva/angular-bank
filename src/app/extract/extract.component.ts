import { TransferService } from './../services/transferService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  transfers: any[];

  constructor(private service: TransferService) {}

  ngOnInit(): void {
    this.transfers = this.service.transfers;
  }

}
