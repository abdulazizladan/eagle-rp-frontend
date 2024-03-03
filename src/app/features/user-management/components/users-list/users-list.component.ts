import { Component, signal, effect, inject, OnInit, WritableSignal, Signal, OnDestroy, Injector, ChangeDetectionStrategy, computed } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

import { UsersStore } from '../../store/user.store';
import { getState } from '@ngrx/signals';
import { UserStatus } from '../../enums/userStatus.enum';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';

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
  dataSource!: MatTableDataSource<User[]>;
  store = inject(UsersStore);
  dialogRef: any;

  word: string = "";

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'action'];
  //users: Signal<User[] | any> = this.userService.getAll();

  constructor() {
    effect(() => {
      const state = getState(this.store);
      console.log(`Users state has changed`, state)
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
    //this.dataSource = new MatTableDataSource<User[]>(computed(() => this.store.users()))
  }

  ngOnDestroy(): void {

  }

  goToUser(id: string) {

  }

  getUsers(): void {
    effect(() => {

    }, {injector: this.injector})
  }

  filter(value: string) {
    this.word = value;
  }

  openDeleteDialog(id: string) {
    const userId = id;
    this.dialog.open(ConfirmDeleteComponent, {data: userId})
  }

}
