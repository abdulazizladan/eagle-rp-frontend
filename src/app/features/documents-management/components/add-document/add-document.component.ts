import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentModel } from '../../models/document.model';
import { Store } from '@ngrx/store';
import { DocumentsState } from '../../store/documents.reducer';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit{

  public documentForm!: FormGroup;

  private fb = inject(FormBuilder);
  private store = inject(Store<{documents: DocumentsState}>)

  constructor() {

  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.documentForm = this.documentForm = this.fb.group({
      id: ["", [Validators.required]],
      title: ["", [Validators.required]],
      description: ["", Validators.required],
      file: [""]
    })
  }

  submit() {
    //this.store.dispatch()
  }

}
