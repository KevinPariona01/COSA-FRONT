import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-conflicto-editar',
  templateUrl: './conflicto-editar.component.html',
  styleUrls: ['./conflicto-editar.component.css']
})
export class ConflictoEditarComponent implements OnInit {

  //Header
  displayedColumns: string[] = ['id', 'documento', 'archivo', 'tipo', 'acciones']

  data: any = [
    {
      id:0,
      documento: 'documento1',
      tipo: 'sustento/Evidencias'
    }
  ]

  constructor(
    public _router: Router,
    private _Activatedroute: ActivatedRoute, 
  ) { }



  ngOnInit(): void {
    //RECIBIR PARAMETRO
    //this.id = this._Activatedroute.snapshot.paramMap.get("id");
  }

  guardar(ngForm){

  }

  edit(element){

  }

}
