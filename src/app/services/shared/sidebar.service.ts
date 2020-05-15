import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [];

  menu2: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { 

          titulo: 'Dashboard', url: '/dashboard', icono : 'fa fa-address-card'
        
        },
        { titulo: 'ProgressBar', url: '/progress', icono : 'fa fa-address-card'},
        { 
          otromenu: [
            {titulo: 'Menu 4', url: '/graficas1', icono : 'fa fa-address-card'},
            {titulo: 'Menu 5', url: '/graficas1', icono : 'fa fa-address-card'},
          ]        
        },
      ]
    }
  ];

  

  

  constructor() { 
    //this.menu = this._usuarioService.menu;
     //console.log(this.menu); 
     //console.log(this.menu); 
    
     //console.log(this.menu2); 
    
  }
}
