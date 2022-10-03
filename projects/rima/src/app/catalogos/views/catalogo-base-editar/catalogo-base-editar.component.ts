import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Catalogo } from '../../../helpers/interface/catalogo.interface';
import { CatalogoService } from '../../services/catalogo.service';

@Component({
  selector: 'app-catalogo-base-editar',
  templateUrl: './catalogo-base-editar.component.html',
  styleUrls: ['./catalogo-base-editar.component.css']
})
export class CatalogoBaseEditarComponent implements OnInit {

  //OBJETO CATALOGO
  catalogo: Catalogo;

  constructor(
    public dialogRef: MatDialogRef<CatalogoBaseEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public catalogoService: CatalogoService
  ) { }

  ngOnInit(): void {
    this.catalogo = {
      idItem: 0,
      idCatalogo: 0,
      valor: '',
      etiqueta: '',
      descripcion: '',
      activo: '',
      regisActivo: '',
      idRegistra: '',
      idModifica: '',
      idElimina: '',
      motElimina: '',
      registroActivobool: true,
    };

  }

  insertar(newForm){
    this.catalogoService.insertar(this.catalogo).then((res) => {
      console.log('editando', res);
      try {
        if (res.estado) {
          console.log(res.estado);
          this.dialogRef.close({ flag: true, data: this.catalogo });
        } else {
          console.log(res);
        }
      } catch (error) {
        console.error(error);
      }
    });
  }

}
