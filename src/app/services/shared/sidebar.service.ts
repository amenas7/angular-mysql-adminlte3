import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
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

  constructor() { }
}
