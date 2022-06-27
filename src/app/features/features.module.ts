import { NgModule } from '@angular/core';
import { LayoutModule } from '@core/layout/layout.module';
import { HomePageComponent } from './home-page';
import { ProfileModule } from './profile/profile.module';
import { SearchHomeModule } from '@features/search-home/search-home.module';
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        HomePageComponent
    ],
    exports: [
        HomePageComponent
    ],
    imports: [
        LayoutModule,
        ProfileModule,
        SearchHomeModule,
        RouterModule
    ]
})
export class FeaturesModule { }
