import {Routes} from '@angular/router';
import {PageNotFoundComponent} from '@core/layout/page-not-found';
import {HomePageComponent} from '@features/home-page';
import {ProfileDetailComponent} from '@features/profile/profile-detail';
import {SearchHomeComponent} from '@searchHome/search-home-details/search-home.component';

export const appRoutes: Routes = [
    {
        component: ProfileDetailComponent,
        data: {name: 'profileDetail'},
        path: 'profile'

    },

    {
        component: PageNotFoundComponent,
        data: {name: 'pageNotFound'},
        path: '404'
    },
    {

        component: HomePageComponent,
        data: {name: 'homePage'},
        path: '',
        children: [
            {
                component: SearchHomeComponent,
                data: {name: 'searchHome'},
                path: 'home'
            },
        ]
    },
    {
        data: {name: 'pageNotFound'},
        path: '**',
        redirectTo: '/404'
    }
];
