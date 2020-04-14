import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';


// Modulos
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './pages/demo/demo.component';

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
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
