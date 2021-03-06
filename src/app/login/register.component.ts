import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { UsuarioService } from '../services/service.index';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public _usuarioSerice: UsuarioService,
    public router: Router,
  ) {


   }

  // listar(){
  //   let url = URL_SERVICIOS + '/Usuario/data';
  //   return this.http.get(url);
  // }

  sonIguales( campo1: string, campo2: string ) {
    return ( group: FormGroup ) => {

      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if ( pass1 === pass2 ) {
        return null;
      }
      return {
        sonIguales: true
      };
    };
  }

  ngOnInit() {
    this.forma = new FormGroup({
      nombre: new FormControl( null, Validators.required ),
      correo: new FormControl( null, Validators.required ),
      password: new FormControl( null, Validators.required ),
      password2: new FormControl(null, Validators.required ),
      condiciones: new FormControl( false )
    }, { validators: this.sonIguales( 'password', 'password2' )  } );

    this.forma.setValue({
      nombre: 'Test',
      correo: 'test@test.com',
      password: '123456',
      password2: '123456',
      condiciones: false
    });
 
  }


  registrarUsuario(){
    
    if ( this.forma.invalid ) {
      return;
    }
    

    if ( !this.forma.value.condiciones ) {
       Swal.fire(
         'Importante',
         'Debe seleccionar las condiciones',
         'warning'
       )
       return;
     }

     let usuario = new Usuario(
       this.forma.value.nombre,
       this.forma.value.correo,
       this.forma.value.password
     );


    this._usuarioSerice.crearUsuario(usuario)
              .subscribe( resp => this.router.navigate(['/login']));

              
    //  this.listar().subscribe( (res: any) => {
    //      console.log(res); 
        
    //  });
    
  }

}
