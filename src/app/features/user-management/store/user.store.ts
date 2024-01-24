import { signalStore, withState, patchState, withComputed, withMethods, withHooks } from "@ngrx/signals";
import { computed, inject } from "@angular/core";
import { UserStatus } from "../enums/userStatus.enum";
import { User } from "../models/user.model";
import { UserState } from "./user.interface";
import { UsersService } from "../services/users.service";
import { catchError, switchMap, tap, map, of } from "rxjs";

/**
export const UserStore = signalStore(
  withState(
    {
      users:
        [
          {
            "id": "1883FZ",
            "email": "oluwanisola_06@gmail.com",
            "firstName": "Bolanle",
            "middleName": "",
            "lastName": "Oluwanisola",
            "password": "1234",
            "status": UserStatus.active,
          },
          {
          "id": "1843NC",
          "email": "bakari526@gmail.com",
          "firstName": "bakari",
          "middleName": "",
          "lastName": "Saidu",
          "password": "1324",
          "status": UserStatus.active,
          }
        ],
        initialized: false
      }
    ),
  withComputed((state) => ({
    usersCount: computed(() => state.users().length),
    //users: computed(() => state)
  })),
  withMethods((state) => ({
    add(user: User) {
      const newUser = user;
      patchState(
        state, {state:  [...state.users(), newUser] }
      );
      console.log([...state.users(), newUser])
    },
    add() {
      patchState(
        state, {users: []}
      )
    },
    update() {

    },
    loadUsers() {

    },
    remove() {

    }
  })),
  withHooks({
    onInit() {

    },
    onDestroy(){

    }
  })
)**/

type UsersState = {
  users: User[],
  isLoading: boolean
}
const initialState: UsersState= {
  users: [
    {
      "id": "1843NC",
      "email": "bakari526@gmail.com",
      "firstName": "bakari",
      "middleName": "",
      "lastName": "Saidu",
      "password": "1324",
      "status": UserStatus.active,
      },
      {
        "id": "1883TZ",
        "email": "oluwanisola_06@gmail.com",
        "firstName": "Bolanle",
        "middleName": "",
        "lastName": "Oluwanisola",
        "password": "1234",
        "status": UserStatus.active,
      },
      {
        "id": "1925BQ",
        "email": "chidera424@gmail.com",
        "firstName": "Chidera",
        "middleName": "",
        "lastName": "Eziuche",
        "password": "1234",
        "status": UserStatus.active,
      }
  ],
  isLoading: false
}

export const UsersStore = signalStore(
  //{provideIn: 'root'},
  withState(initialState),
  withComputed((state) => ({
    usersCount: computed(() => state.users().length)
  })),
  withMethods((state, userService = inject(UsersService)) => (
    {
      async loadAll(): Promise<void> {
        patchState(state, {isLoading: true});
      },
      add(user: User) {
        const newUser = user;
        patchState(
          state, {
            users: [...state.users(), newUser],
            isLoading: false
          }
        )
      },
      update() {

      },
      delete(id: string) {
        const deleteId = id;
        patchState(
          state, {
            users: state.users().filter((x) => x.id != deleteId),
            isLoading: false
          }
        )
      }
    }
    )
  )
)
function rxMethod(arg0: (userService?: UsersService) => any): any {
  throw new Error("Function not implemented.");
}

