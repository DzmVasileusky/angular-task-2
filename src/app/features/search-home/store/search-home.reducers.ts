import {ProfileListState} from '@searchHome/interfaces';
import {Action, createReducer, on} from '@ngrx/store';
import {profileListActions} from '@searchHome/store/search-home.actions';

const initialState: ProfileListState = {
    usersArr: []
};

const reducer = createReducer(
    initialState,
    on(profileListActions.listUsersInit, (state, action) => ({
        usersArr: [...action.users]
    }))
);

// tslint:disable-next-line:only-arrow-functions
export function getSerchHomeListReducer(state: ProfileListState | undefined, action: Action) {

    return reducer(state, action);

}
