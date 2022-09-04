import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtractComponent } from './extract/extract.component';
// import { NewTransferComponent } from './new-transfer/new-transfer.component';

const routes: Routes = [
  // { path: '', redirectTo: '/make-transfer', pathMatch: 'full' },
  // { path: 'make-transfer', component: NewTransferComponent },
  { path: 'transfers', component: ExtractComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
