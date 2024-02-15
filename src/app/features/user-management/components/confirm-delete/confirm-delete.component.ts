import { Component, Input, OnInit, Inject, inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersStore } from '../../store/user.store';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrl: './confirm-delete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDeleteComponent implements OnInit {

  public store = inject(UsersStore);

  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: string}) {

  }

  ngOnInit(): void {

  }

  confirm() {
  }

}
