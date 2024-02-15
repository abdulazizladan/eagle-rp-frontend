import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsListComponent } from './components/documents-list/documents-list.component';
import { DocumentsDetailComponent } from './components/documents-detail/documents-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentsListComponent
  },
  {
    path: ':id',
    component: DocumentsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsManagementRoutingModule { }
