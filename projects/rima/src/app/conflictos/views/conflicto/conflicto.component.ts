import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-conflicto',
  templateUrl: './conflicto.component.html',
  styleUrls: ['./conflicto.component.css']
})
export class ConflictoComponent implements OnInit {

  //Header
  displayedColumns: string[] = ['codigo', 'identivado', 'rotulo', 'subsector', 'estado', 'acciones1', 'acciones2', 'acciones3']

  datos:any = [
    {
      cod:0,
      ide:1,
      rot:3,
      sub:4,
      est:5,
    },
    {
      cod:6,
      ide:7,
      rot:8,
      sub:9,
      est:10,
    },
    {
      cod:11,
      ide:12,
      rot:13,
      sub:14,
      est:15,
    },
  ]

  dataSource = new MatTableDataSource(this.datos);


  zonas: any[] = [
    {value: '0', viewValue: 'zona 1'},
    {value: '1', viewValue: 'zona 2'},
    {value: '2', viewValue: 'zona 3'}
  ];

  constructor(
    public _router :Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  edit(element):void{
    this._router.navigate([`/conflicto-editar/id`]);
  }

  seguimiento(element):void{
    this._router.navigate([`/conflicto-seguimiento`]);
  }

}
