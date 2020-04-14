
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        NopagefoundComponent,
        BreadcrumsComponent,
        HeaderComponent,
        SidebarComponent
    ],
    exports: [
        NopagefoundComponent,
        BreadcrumsComponent,
        HeaderComponent,
        SidebarComponent
    ]
})

export class SharedModule {}

