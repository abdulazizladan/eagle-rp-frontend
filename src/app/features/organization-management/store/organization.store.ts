import { signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { Organization } from "../models/organization.model";

export type OrganizationState = {
  organization: Organization | undefined;
  isLoading: boolean;
}

export const initialState: OrganizationState = {
  organization: undefined,
  isLoading: false
}

export const OrganizationStore = signalStore(
  withState(initialState),
  withComputed((state) => ({})),
  withMethods((state) => ({})),
  withHooks((state) => ({}))
)
