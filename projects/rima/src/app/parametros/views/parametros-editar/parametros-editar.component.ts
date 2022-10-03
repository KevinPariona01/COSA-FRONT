import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../../general/snack-bar/snack-bar.component';
import { proceso } from '../../../helpers/interface/proceso.interface';
import { parametrosServices } from '../../services/parametros.services';


@Component({
  selector: 'app-parametros-editar',
  templateUrl: './parametros-editar.component.html',
  styleUrls: ['./parametros-editar.component.css'],
  providers: [parametrosServices]
})
export class ParametrosEditarComponent implements OnInit {
  editar = false;
  proceso: proceso;
  constructor(
    public dialogRef: MatDialogRef<ParametrosEditarComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private parametroServices: parametrosServices,
    public snackBar: MatSnackBar,
  ) { }
  
  ngOnInit(): void {
    if (this.data.proceso == null) {
      this.editar = false;
      this.proceso = {
        nombre: "",
        acronimo: "",
        activo: "",
        descripcion: "",
        firma: "",
        idProceso: 0,
        motivoElimina: "",
        registroActivo: "",
        usuElimina: "",
        usuModifica: "",
        usuRegistra: "",
        registroActivobool: true
      }      
    } else {
      this.editar = true;
      this.proceso = this.data.proceso; 
    }
    console.log(this.proceso);
  }

  guardar(newForm){
    console.log(this.editar);  
    
    let val = this.validar();
    console.log(val);

    if (!val) {
      if( this.editar ){
        console.log(this.proceso);
        this.parametroServices.editar(this.proceso).then(res => {
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
      }else{
        console.log(this.proceso);
        this.parametroServices.agregar(this.proceso).then(res => {
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
    this.parametroServices.validar(this.proceso).then(res => {
      try {
        if (res.estado) {
          console.log(res);  
          if(res.content.dataSource.length > 0){
            existe = true
            let nom = res.content.dataSource[0].nombre
            let activado = res.content.dataSource[0].registroActivo
            let msn = ""
            if (activado == "1") {
              msn = `El proceso ${nom} existe`
            }else{
              msn = `El proceso ${nom} existe y esta deshabilitado`             
            }         
            this.snackBar.openFromComponent(SnackBarComponent, {
              duration: 2500,
              data: {
                mensaje: msn,
                tipo: 99
              }
            });         
          }else{
            existe = false
          }
          //this.dialogRef.close({ flag: true, data: this.proceso });          
        } else {                          
          console.log(res); 
        }
      } catch (error) {
        console.error(error);
      }
    });
    return existe;
  }

  cerrar(){
    this.dialogRef.close({ flag: true, data: this.proceso });
  }


}
