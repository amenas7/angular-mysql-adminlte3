import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from "@angular/forms";

import { 
  SidebarService,
  SharedService,
  UsuarioService,
  LoginGuardGuard
} from "./service.index";
import { HttpClientModule } from '@angular/common/http';

 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuardGuard
    
  ],
})
export class ServiceModule { }
