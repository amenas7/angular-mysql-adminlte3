import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  usuario: string;
  recuerdame: boolean = false;

  constructor(
    public router: Router,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.usuario = localStorage.getItem('username') || '';
    if ( this.usuario.length > 1 ) {
      this.recuerdame = true;
    }
  }


  ingresar( forma: NgForm ){

    if( forma.invalid){
      return;
    }

     //console.log(forma.value); 

     let usuario = new Usuario(null, forma.value.usuario, forma.value.password );

    this._usuarioService.login( usuario, forma.value.recuerdame )
    .subscribe( correcto => this.router.navigate(['/dashboard'])  );

  }

}
