import {createAction, props} from '@ngrx/store';
import {UserProfile} from '@interfaces';

const initProfile = createAction('[Profile] Init');

const userPending = createAction('[User] Get user pending');

const userInit = createAction('[User] Get user init', props<{ user: UserProfile }>());

export const profileActions = {initProfile, userPending, userInit};
