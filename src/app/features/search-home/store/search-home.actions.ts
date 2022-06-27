import { createAction, props } from '@ngrx/store';
import { UserProfile } from '@interfaces';

const listUsersPending = createAction('[Users List] Get users list pending', props<{ num: number }>());

const listUsersInit = createAction('[Users List] Get users list init', props<{ users: UserProfile[] }>());

export const profileListActions = { listUsersPending, listUsersInit };
