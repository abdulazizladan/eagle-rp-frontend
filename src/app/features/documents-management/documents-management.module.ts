import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

import { DocumentsManagementRoutingModule } from './documents-management-routing.module';
import { DocumentsListComponent } from './components/documents-list/documents-list.component';
import { DocumentStore } from './store/documents.store';
import { DocumentsDetailComponent } from './components/documents-detail/documents-detail.component';
import { AddDocumentComponent } from './components/add-document/add-document.component';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    DocumentsListComponent,
    DocumentsDetailComponent,
    AddDocumentComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressBarModule,
    MatListModule,
    MatSlideToggleModule,
    MatExpansionModule,
    DocumentsManagementRoutingModule
  ],
  providers: [
    DocumentStore
  ]
})
export class DocumentsManagementModule { }
