import {Injectable} from '@angular/core';
import {UsersApiService} from '@features/services/users-api.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {profileActions} from '@features/profile/store/profile.actions';
import {map, mergeMap} from 'rxjs/operators';

@Injectable()
export class UserEffects {

    loadUser$ = createEffect(() => this.action$.pipe(
        ofType(profileActions.userPending),
        mergeMap(() => this.usersApiServer.getUsers()
            .pipe(
                map(([user]) => profileActions.userInit({user}))
            ))
    ))

    constructor(private action$: Actions, private usersApiServer: UsersApiService) {
    }

}
