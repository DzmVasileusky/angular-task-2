import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileListState } from '@interfaces';

export const getProfileListState = createFeatureSelector<ProfileListState>('plist');

export const getUsersListProfile = createSelector(getProfileListState, ({ usersArr }) => usersArr);
