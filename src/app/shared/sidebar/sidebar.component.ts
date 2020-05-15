import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../../services/service.index';
import { UsuarioService } from 'src/app/services/service.index';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  //this.optionForos = this.tablaUsuarios.optionForos;
  rol_storage: string = localStorage.getItem('role');
  variable: any[] = [];

  constructor( 

    public _usuarioService: UsuarioService ) { 
       //console.log(this._usuarioService.menu2); 
       this.variable = this._usuarioService.ifMenu(this.rol_storage);
        //console.log(this.variable); 
       

       //console.log(this._sidebar.menu['titulo']); 
      
    }
  ngOnInit() {
  }

}
