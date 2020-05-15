import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from "rxjs/operators";

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrls: ['./breadcrums.component.css']
})
export class BreadcrumsComponent implements OnInit {

  titulo: string;

  constructor(  private router: Router ,tilte: Title   ) { 
    this.getDataRoute()
      .subscribe( data => {
       //console.log(data);
       this.titulo = data.titulo;
    });
  }

  ngOnInit() {
  }

  getDataRoute(){
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map( ( evento: ActivationEnd ) => evento.snapshot.data)
    );
  }

}
