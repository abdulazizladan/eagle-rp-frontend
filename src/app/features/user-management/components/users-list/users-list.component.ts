import { Component, signal, effect, inject, OnInit, WritableSignal, Signal, OnDestroy, Injector, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

import { UsersStore } from '../../store/user.store';
import { getState } from '@ngrx/signals';
import { UserStatus } from '../../enums/userStatus.enum';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [],
})
export class UsersListComponent implements OnInit, OnDestroy {

  private userService = inject(UsersService);
  private dialog = inject(MatDialog);
  private injector = inject(Injector);
  store = inject(UsersStore);
  dialogRef: any;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'action'];
  users : Signal<User[] | undefined> = this.userService.usersSignal;

  constructor() {
    effect(() => {
      const state = getState(this.store);
    })
  }

  openDialog() {
    this.dialogRef = this.dialog.open(
      AddUserComponent,
      {
        ariaModal: true,
        maxWidth: 800
      }
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  goToUser(id: string) {

  }

  getUsers(): void {
    effect(() => {

    }, {injector: this.injector})
  }

}
