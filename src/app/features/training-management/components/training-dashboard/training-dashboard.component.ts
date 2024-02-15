import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { TrainingStore } from '../../store/training.store';
import { getState } from '@ngrx/signals';
import { MatDialog } from '@angular/material/dialog';
import { AddTrainingComponent } from '../add-training/add-training.component';

@Component({
  selector: 'app-training-dashboard',
  templateUrl: './training-dashboard.component.html',
  styleUrl: './training-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingDashboardComponent {

  ts = [
    {
      "id": 1212,
      "title": "abcd",
      "description": "desc",
      "facilitators": "abcd"
    },
    {
      "id":2122,
      "title": "a",
      "description": "desc",
      "facilitators": "abcd"
    }
  ]

  displayedColumns: Array<string> = ["title", "description", "facilitators"];

  store = inject(TrainingStore);
  private dialog = inject(MatDialog);

  constructor() {
    effect(() => {
      const state = getState(this.store);
      console.log('training state has changed', state)
    })
  }

  openDialog(): void {
    this.dialog.open(
      AddTrainingComponent,
      {
        ariaModal: true,
        maxWidth: 800
      }
    )
  }
}
