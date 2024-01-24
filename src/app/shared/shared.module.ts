import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    LoaderComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
