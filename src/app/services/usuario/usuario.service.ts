import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';

import Swal from 'sweetalert2';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;
  role: string;
  menu: any[] = [];
  menu2: any[] = [];

  constructor(
    public http: HttpClient,
    public router: Router,
  ) {
     
    this.cargarStorage();
   }

   ifMenu(rol: string){
   if(rol === 'admin'){
    this.menu = [
        {
          titulo: 'Principal',
          icono: 'mdi mdi-gauge',
          submenu: [
            { titulo: 'Dashboard', url: '/dashboard', icono : 'fa fa-address-card'},
            { titulo: 'ProgressBar', url: '/progress', icono : 'fa fa-address-card'},
            { titulo: 'Gráficas', url: '/graficas1', icono : 'fa fa-address-card'},
            { titulo: 'Demo', url: '/demo', icono : 'fa fa-address-card'}
          ]
        }
      ];
       //console.log(this.menu); 
      
      return this.menu;
     }

     else if(rol === 'usuario'){
      this.menu = [
        {
          titulo: 'Principal',
          icono: 'mdi mdi-gauge',
          submenu: [
            { titulo: 'Dashboard', url: '/dashboard', icono : 'fa fa-address-card'},
            { titulo: 'ProgressBar', url: '/progress', icono : 'fa fa-address-card'},
            { titulo: 'Gráficas', url: '/graficas1', icono : 'fa fa-address-card'},
          ]
        }
      ];
        //console.log(this.menu); 
      
      return this.menu;
       }
  }

  login(usuario: Usuario, recordar: boolean = false){

    if ( recordar ) {
      localStorage.setItem('username', usuario.correo );
    }else {
      localStorage.removeItem('username');
    }

    let url = URL_SERVICIOS + 'Usuario/loginUsuario';

    return this.http.post(url, usuario)
        .map( (resp: any) => {
          this.guardarStorage( resp.id, resp.token, resp.usuario, resp.role );
           //console.log(resp.role); 
           this.ifMenu(resp.role);
          
          return true;
        })

   }

   estaLogueado(){
    return ( this.token.length > 5 ) ? true : false;
   }

   logout() {
    this.usuario = null;
    this.token = '';
    this.role = '';
    //this.menu = [];

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('role');

    this.router.navigate(['/login']);
  }

   cargarStorage() {

    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
      this.role = localStorage.getItem('role') ;
    } else {
      this.token = '';
      this.usuario = null;
      this.role = '';
    }

  }

   guardarStorage( id: string, token: string, usuario: Usuario, role: any ) {

    localStorage.setItem('id', id );
    localStorage.setItem('token', token );
    localStorage.setItem('usuario', JSON.stringify(usuario) );
    localStorage.setItem('role', role );

    this.usuario = usuario;
    this.token = token;
    this.role = role;
  }



   crearUsuario( usuario: Usuario ) {

    let url = URL_SERVICIOS + 'Usuario/registrarUsuario';

    return this.http.post( url, usuario )
    .map( (resp: any) => {
      Swal.fire(
        'Usuario creado',
        usuario.nombre,
        'success'
      );
      return resp.usuario;
    });
      
  }
}
