import { Component, inject } from '@angular/core';
import { DocumentStore } from '../../store/documents.store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrl: './add-document.component.scss'
})
export class AddDocumentComponent {

  private dialogRef = inject(MatDialogRef<AddDocumentComponent>);

  store = inject(DocumentStore);
  snackBar = inject(MatSnackBar);
  private fb = inject(FormBuilder);

  newDocumentForm: FormGroup = this.fb.group({
    id: ['', Validators.required],
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    type: ['', [Validators.required]]
  })

  constructor() {

  }

  submit() {
    const newDocument = this.newDocumentForm.value;
    this.store.add(newDocument);
    this.snackBar.open("Document added successfully.", "Close")
    this.dialogRef.close();
  }

}
