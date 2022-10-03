import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../../general/snack-bar/snack-bar.component';
import { Catalogo } from '../../../helpers/interface/catalogo.interface';
import { CatalogoService } from '../../services/catalogo.service';

@Component({
  selector: 'app-catalogo-editar',
  templateUrl: './catalogo-editar.component.html',
  styleUrls: ['./catalogo-editar.component.css'],
})
export class CatalogoEditarComponent implements OnInit {

  valorValidar;

  selectFormControl = new FormControl('', Validators.required);
  //Lista de catalogos padres
  padres: any = [];

  editar = false;
  //Catalogo
  catalogo: Catalogo;

  constructor(
    public dialogRef: MatDialogRef<CatalogoEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public catalogoService: CatalogoService,
    public snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    if (this.data.catalogo == null) {
      console.log("catalogo a guardar : ",this.data.catalogo);
      
      this.editar = false;
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
      this.valorValidar = this.catalogo.valor;
      console.log("Datos para insercion en validar: ", this.valorValidar);
      
    } else {
      console.log("catalogo a editar : ",this.data.catalogo);
      this.editar = true;
      this.catalogo = this.data.catalogo;
      this.valorValidar = this.data.catalogo.valor;
      console.log("Datos para validar: ", this.valorValidar);
    }
    console.log(this.catalogo);
    this.getCatalogosPadres();
  }

  getCatalogosPadres() {
    this.catalogoService.listarPadre({}).then((res) => {
      this.padres = res.content.dataSource;
      console.log('res', res.content.dataSource);
      console.log('padres', this.padres);
    });
  }

  insertar(){
    if (this.editar) {
      this.catalogoService.modificar(this.catalogo).then((res) => {
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
    } else {
      this.catalogoService.insertar(this.catalogo).then((res) => {
        console.log('guardando', res);
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

  validar(): Boolean {
    let existe = false;
    this.catalogoService.validar(this.catalogo).then((res) => {
      try {
        if (res.estado) {
          console.log(res);
          if (res.content.dataSource.length > 0) {
            existe = true;
            let val = res.content.dataSource[0].valor;
            let activado = res.content.dataSource[0].regisActivo;
            let msn = '';
            if (activado == '1') {
              msn = `El catalogo ${val} existe`;
            } else {
              msn = `El catalogo ${val} existe y esta deshabilitado`;
            }
            this.snackBar.openFromComponent(SnackBarComponent, {
              duration: 2500,
              data: {
                mensaje: msn,
                tipo: 99,
              },
            });
          } else {
            existe = false;
            this.insertar();
          }
        } else {
          console.log(res);
        }
      } catch (error) {
        console.error(error);
      }
    });
    return existe;
  }

  validarIgualdad (newForm){
    if(this.catalogo.valor == this.valorValidar){
      this.catalogoService.modificar(this.catalogo).then((res) => {
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
    }else{
      this.validar(); 
    }
  }
}
