import { Component, inject } from '@angular/core';
import { DocumentStore } from '../../store/documents.store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatChipInput, MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrl: './add-document.component.scss'
})
export class AddDocumentComponent {

  private dialogRef = inject(MatDialogRef<AddDocumentComponent>);
  announcer = inject(LiveAnnouncer);

  keywords: Array<string> = [];

  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);

      this.announcer.announce(`removed ${keyword}`);
    }
  }

  add(event: MatChipInputEvent) {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.keywords.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

  }

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
    this.snackBar.open("Document added successfully.", "Close", {duration: 3000})
    this.dialogRef.close();
  }

}
