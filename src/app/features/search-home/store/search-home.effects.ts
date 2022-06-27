import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {profileListActions} from '@searchHome/store/search-home.actions';
import {map, mergeMap} from 'rxjs/operators';
import {UserProfile} from '@interfaces';
import {UsersApiService} from '@features/services/users-api.service';

@Injectable()
export class UsersListEffect {

    // @ts-ignore
    loadUsers$ = createEffect(() => this.action$.pipe(
        ofType(profileListActions.listUsersPending),
        mergeMap(({num}) => this.usersApiService.getUsers(num)
            .pipe(
                map((users: UserProfile[]) => profileListActions.listUsersInit({users}))))
    ));

    constructor(private action$: Actions, private usersApiService: UsersApiService) {
    }

}
