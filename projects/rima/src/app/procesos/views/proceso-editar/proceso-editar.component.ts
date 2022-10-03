import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../../general/snack-bar/snack-bar.component';
import { proceso } from '../../../helpers/interface/proceso.interface';
import { procesoServices } from '../../services/proceso.services';

@Component({
  selector: 'app-proceso-editar',
  templateUrl: './proceso-editar.component.html',
  styleUrls: ['./proceso-editar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProcesoEditarComponent implements OnInit {
  editar = false;
  proceso: proceso;
  constructor(
    public dialogRef: MatDialogRef<ProcesoEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private procesoServices: procesoServices,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.data.proceso == null) {
      this.editar = false;
      this.proceso = {
        nombre: '',
        acronimo: '',
        activo: '',
        descripcion: '',
        firma: '',
        idProceso: 0,
        motivoElimina: '',
        registroActivo: '',
        usuElimina: '',
        usuModifica: '',
        usuRegistra: '',
        registroActivobool: true,
      };
    } else {
      this.editar = true;
      this.proceso = this.data.proceso;
    }
    console.log(this.proceso);
  }

  guardar(newForm) {
    console.log(this.editar);

    let val = this.validar();
    console.log(val);

    if (!val) {
      if (this.editar) {
        console.log(this.proceso);
        this.procesoServices.editar(this.proceso).then((res) => {
          try {
            if (res.estado) {
              console.log(res.estado);
              this.dialogRef.close({ flag: true, data: this.proceso });
            } else {
              console.log(res);
            }
          } catch (error) {
            console.error(error);
          }
        });
      } else {
        console.log(this.proceso);
        this.procesoServices.agregar(this.proceso).then((res) => {
          try {
            if (res.estado) {
              console.log(res.estado);
              this.dialogRef.close({ flag: true, data: this.proceso });
            } else {
              console.log(res);
            }
          } catch (error) {
            console.error(error);
          }
        });
      }
    }
  }

  validar(): Boolean {
    let existe = false;
    this.procesoServices.validar(this.proceso).then((res) => {
      try {
        if (res.estado) {
          console.log(res);
          if (res.content.dataSource.length > 0) {
            existe = true;
            let nom = res.content.dataSource[0].nombre;
            let activado = res.content.dataSource[0].registroActivo;
            let msn = '';
            if (activado == '1') {
              msn = `El proceso ${nom} existe`;
            } else {
              msn = `El proceso ${nom} existe y esta deshabilitado`;
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

  cerrar() {
    this.dialogRef.close({ flag: true, data: this.proceso });
  }
}
