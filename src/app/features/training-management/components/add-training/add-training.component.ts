import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export class Training{
  "title": string;
  "description": string;
  "facilitator": string;
  "location": Location;
  "startDate": Date;
  "endDate": Date;
  "attendees": Array<string>;//employee IDs
  "allowance": number;
  //"status": Status;
}

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrl: './add-training.component.scss'
})
export class AddTrainingComponent implements OnInit{

  private fb = inject(FormBuilder);
  trainingForm!: FormGroup;

  constructor() {

  }

  ngOnInit() {
    this.trainingForm = this.fb.group({
      title: [''],
      description: [''],
      facilitator: [''],
      location: this.fb.group({
        streetAddress: [''],
        lga: [''],
        state: [''],
        country: ['']
      }),
      startDate: [''],
      endDate: [''],
      attendees: [[]],
      allowance: [0]

    })
  }

  get attendees(): FormArray {
    return this.trainingForm.get('attendees') as FormArray
  }

  addAttendee() {
    const attendee = this.fb.group({
      id: [''],
      firstName: [''],
      middleName: [''],
      lastName: ['']
    });
    this.attendees.push(attendee)
  }

  removeAttendee(index: number) {
    this.attendees.removeAt(index)
  }

}
