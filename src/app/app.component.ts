import { Component } from '@angular/core';
import { TransferService } from './services/transferService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-bank-lucassneiva';
  transfersList: any[] = [];

  constructor(private service: TransferService) {}

  handleTransfer($event) {
    console.log($event);
    this.service.createNewTransfer($event);
  }
}
