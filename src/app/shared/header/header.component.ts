import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) { }

  ngOnInit() {
  }

}
