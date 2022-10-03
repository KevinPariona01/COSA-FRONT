import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conflicto-seguimiento',
  templateUrl: './conflicto-seguimiento.component.html',
  styleUrls: ['./conflicto-seguimiento.component.css']
})
export class ConflictoSeguimientoComponent implements OnInit {

  //Header estados
  estados: string[] = ['etapa', 'estado', 'fechIng', 'fechSal', 'monitoreado', 'preside', 'economica', 'sensibilidad', 'acciones'];
  //Header zonas
  zonas: string[] = ['rotulo', 'departamento', 'provincia', 'distrito', 'ingreso', 'acciones'];
  //Header zonas
  demandas: string[] = ['rotulo', 'departamento', 'provincia', 'distrito', 'ingreso', 'acciones'];

  showZonas = 0;

  constructor() { }

  ngOnInit(): void {
  }

  show
  mostrarZonas(){
    if(this.showZonas==0){
      this.showZonas=1
    }else{
      this.showZonas = 0
    }
  }

}
