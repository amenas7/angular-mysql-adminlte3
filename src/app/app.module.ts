import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

//Temporal
import { FormsModule } from "@angular/forms";


// Modulos
import { PagesModule } from './pages/pages.module';


//Servicios
import { ServiceModule } from './services/service.module';


import { AppComponent } from './app.component';
import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './pages/demo/demo.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    IncrementadorComponent,
    LoginComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    ServiceModule,
    FormsModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
