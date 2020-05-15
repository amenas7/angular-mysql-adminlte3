import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Usuario } from '../../models/usuario.model';

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DemoService {
  public URL = URL_SERVICIOS + 'Demo/data';

  demo: Usuario;

  constructor(public http: HttpClient) { }

  listar( ) {

    let url = URL_SERVICIOS + 'Demo/data';

    return this.http.get( url )
    .map( (resp: any) => {
      
      return resp;
    });
      
  }
}
