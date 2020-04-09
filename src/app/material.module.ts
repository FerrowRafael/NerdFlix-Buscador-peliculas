import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    exports: [
        MatButtonModule,
        MatCardModule,
        // MatSidenavModule,
        // MatToolbarModule,
        // MatIconModule,
        // MatListModule,
    ]
})

export class MaterialModule { }
