import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms";

import { SidebarService, SharedService } from "./service.index";
 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    SidebarService,
    SharedService 
  ],
})
export class ServiceModule { }
