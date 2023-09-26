import { Component, OnInit, inject } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { UserState } from '../../store/user-management.reducer';
import { loadUsers, updateUser } from '../../store/user-management.actions';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit{

  private dialog= inject(MatDialog);

  users$!: Observable<UserState>;

  displayedColumns: string[] = ['firstName', 'middleName', 'lastName', 'email', 'status', 'actions'];
  //dtaSource = new MatTableDataSource(this.users$.pipe(tap(x => {return x})))
  dataSource!: MatTableDataSource<User[]>;

  constructor(
    private store: Store<{users: UserState}>
  ) {
    this.users$ = this.store.select((registry) => registry.users).pipe()
  }

  ngOnInit() {
    this.store.dispatch(loadUsers());
  }

  openDialog() {
    this.dialog.open(AddUserComponent, {maxWidth: "800px", disableClose: true})
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggle(id: string) {
    const userID = id;
    console.log(`Toggled ${userID}`)
    //this.store.dispatch(updateUser({id: userID, user: {}}))
  }
}
