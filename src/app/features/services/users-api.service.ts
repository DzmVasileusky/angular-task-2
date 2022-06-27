import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserProfile} from '@interfaces';
import {map, pluck} from 'rxjs/operators';
import {IUser} from '@features/services/api-user-interface';

@Injectable({
    providedIn: 'root'
})
export class UsersApiService {

    constructor(private http: HttpClient) {
    }

    public getUsers(num: number = 1): Observable<UserProfile[]> {

        return this.http.get(`https://randomuser.me/api/?results=${num}`).pipe(
            pluck('results'),
            map((usersArr: IUser[]) => usersArr.map((user: IUser) => ({
                cellNumber: user.cell,
                city: user.location.city,
                dateOfBirth: user.dob.date.slice(0, 10),
                email: user.email,
                firstName: user.name.first,
                lastName: user.name.last,
                phoneNumber: user.phone,
                picture: user.picture.medium,
                state: user.location.state,
                id: user.id.value
            })))
        );

    }

}
