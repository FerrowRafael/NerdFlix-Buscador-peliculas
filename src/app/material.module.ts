import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
    exports: [
        MatButtonModule,
        MatCardModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatGridListModule
    ]
})

export class MaterialModule { }
