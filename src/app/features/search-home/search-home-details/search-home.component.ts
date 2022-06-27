import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {UserProfile} from '@interfaces';
import {Store} from '@ngrx/store';
import {getUsersListProfile} from '@searchHome/store/search-home.selectors';
import {profileListActions} from '@searchHome/store/search-home.actions';

@Component({
    selector: 'app-search-home',
    templateUrl: './search-home.component.html',
    styleUrls: ['./search-home.component.scss']
})
export class SearchHomeComponent {

    public value!: string;

    private timerID: NodeJS.Timeout;

    public usersList$: Observable<UserProfile[]> = this.store.select(getUsersListProfile);

    constructor(private store: Store) {
    }

    inputData(search: HTMLInputElement) {

        if (search.value.length >= 3) {

            clearTimeout(this.timerID);
            this.timerID = setTimeout(() => {

                this.store.dispatch(profileListActions.listUsersPending({num: 10}));

            }, 600);

        }

    }

}
