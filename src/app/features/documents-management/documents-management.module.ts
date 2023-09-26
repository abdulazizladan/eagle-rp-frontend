import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { DocumentsManagementRoutingModule } from './documents-management-routing.module';
import { DocumentsListComponent } from './components/documents-list/documents-list.component';
import { AddDocumentComponent } from './components/add-document/add-document.component';
import { DocumentViewComponent } from './components/document-view/document-view.component';
import { StoreModule } from '@ngrx/store';
import { DocumentsReducer, featureKey } from './store/documents.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DocumentsEffects } from './store/documents.effects';


@NgModule({
  declarations: [
    DocumentsListComponent,
    AddDocumentComponent,
    DocumentViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    StoreModule.forFeature(featureKey, DocumentsReducer),
    EffectsModule.forFeature(DocumentsEffects),
    DocumentsManagementRoutingModule
  ]
})
export class DocumentsManagementModule { }
