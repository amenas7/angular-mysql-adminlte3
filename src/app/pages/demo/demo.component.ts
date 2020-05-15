import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { DemoService } from 'src/app/services/service.index';
import { Usuario } from 'src/app/models/usuario.model';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @ViewChild('dataTable', {static: true}) table;
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
  NumberOfMembers = 0;

  dtOptions: any = {};
  Members: Usuario[];

  constructor(
    public router: Router, 
    public connectService: DemoService) { }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      info: true,
      language: {
        emptyTable: '',
        zeroRecords: 'No hay coincidencias',
        lengthMenu: 'Mostrar _MENU_ elementos',
        search: 'Buscar:',
        info: 'De _START_ a _END_ de _TOTAL_ elementos',
        infoEmpty: 'De 0 a 0 de 0 elementos',
        infoFiltered: '(filtrados de _MAX_ elementos totales)',
        paginate: {
          next: 'Sig.',
          previous: 'Ant.'
        },
      },
      ajax: (dataTablesParameters: any, callback) => {
        this.connectService.http
          .get(
            this.connectService.URL,
            dataTablesParameters,
          ).subscribe(resp => {
             //console.log(resp['objeto']); 
            this.Members = resp['objeto'];
            this.NumberOfMembers = resp['objeto'].length;
            $('.dataTables_length>label>select, .dataTables_filter>label>input').addClass('form-control-sm');
             callback({
              recordsTotal: resp['recordsTotal'],
              recordsFiltered: resp['recordsTotal'],
              data: []
            });
            if (this.NumberOfMembers > 0) {
              $('.dataTables_empty').css('display', 'none');
            }

          }
        );
      },
      columns: [{ data: 'nombre' }, { data: 'correo' }, { data: 'password' }]
    };
  // this.dataTable = $(this.table.nativeElement);
  // this.dataTable.DataTable(this.dtOption);
}

    ngOnDestroy(): void {

    }

  }

