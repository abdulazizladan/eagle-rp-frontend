import { signalStore, withState, patchState, withComputed, withMethods, withHooks } from "@ngrx/signals";
import { computed, inject } from "@angular/core";
import { User } from "../models/user.model";
import { UsersService } from "../services/users.service";

type UsersState = {
  users: User[],
  filter: { query: string; order: 'asc' | 'desc', id: string},
  isLoading: boolean
}
const initialState: UsersState= {
  users: [],
  filter: {query: '', order: 'asc', id: ''},
  isLoading: false
}

export const UsersStore = signalStore(
  withState(initialState),
  withComputed(({users, filter}) => ({
      usersCount: computed(() => users().length),
      selectedUser: computed(() => {
        // Assuming you want to return the first user that matches the filter criteria
        return users().find((user) => user.id ? user.id.includes(filter().id) : true);
      })
    })
  ),
  withMethods((state, userService = inject(UsersService)) => (
    {
      async loadAll() {
        patchState(state, {
          isLoading: true,
          users: []
        }); // Initialize users state to an empty array
        userService.getAll().subscribe((users) => {
        patchState(state, {
          users,
          isLoading:false
        }); // Update state with fetched users
        });
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
      update(id: string, user: User) {
        patchState(
          state,
          {
            users: state.users().map((u) => (u.id === id ? user : u)),
            isLoading: false
          }
        );
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
  ),
  withHooks({
    onInit({loadAll}) {
      loadAll()
    },
    onDestroy() {
      console.log("destroyed")
    }
  })
)
function rxMethod(arg0: (userService?: UsersService) => any): any {
  throw new Error("Function not implemented.");
}

