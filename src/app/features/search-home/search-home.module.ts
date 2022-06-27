import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchHomeComponent} from './search-home-details/search-home.component';
import {LayoutModule} from '@core/layout/layout.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {effects} from '@searchHome/store/indexEffects';
import {getSerchHomeListReducer} from '@searchHome/store/search-home.reducers';

@NgModule({
    declarations: [
        SearchHomeComponent
    ],
    exports: [
        SearchHomeComponent
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        MatGridListModule,
        MatCardModule,
        MatListModule,
        StoreModule.forFeature('plist', getSerchHomeListReducer),
        EffectsModule.forFeature(effects)

    ]
})
export class SearchHomeModule {
}
