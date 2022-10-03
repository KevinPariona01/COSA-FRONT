import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmarComponent } from '../../../general/confirmar/confirmar.component';
import { procesoServices } from '../../services/proceso.services';
import { ProcesoEditarComponent } from '../proceso-editar/proceso-editar.component';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.css']
})
export class ProcesoComponent implements OnInit {

  displayedColumns: string[] = ['id','acronimo', 'nombre', 'descripcion','registroActivo', 'acciones'];
  //dataSource = [];
  public dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  estadoProceso = [
    {value: '1', viewValue: 'Solo procesos Activos'},
    {value: '0', viewValue: 'Solo procesos Inactivos'},
  ];

  textfilter = '';
  activo = '';

  constructor(
    private procesoServices: procesoServices,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.get();
    /* this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 2500,
      data: {
        mensaje: "ERROR",
        tipo: 99
      }
    }); */
  }

  get(){
    let parametros = {
      activo: this.activo
    }   
    this.procesoServices.get(parametros).then(res => {
      if (res.estado) {        
        /* if (res.content.dataSource.registroActivo == "1" ) {
          res.content.dataSource.registroActivobool = false
        } */
        res.content.dataSource.forEach(element => {
          if (element.activo == "1") {
            element.activo = true;            
          }
          else{
            element.activo = false;
          }
        });
        console.log(res.content.dataSource , 'data');
        this.dataSource = new MatTableDataSource<any>(res.content.dataSource);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      } else {                          
        console.log(res); 
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  eliminar(item): void {
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      width: '500px',
      data: { titulo: "¿Desea eliminar el proceso " + item.nombre + "?" }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);      
      if (result) {
        this.deleteProceso(item);
      } 
    });
  }

  deleteProceso(item){
    console.log("Eliminando", item);
    this.procesoServices.eliminar(item).then(res => {
      if (res.estado) {
        this.get();
        //this.openSnackBar("Proceso eliminado", 200);
      } else {                          
        console.log(res); 
      }
    });
  }

  openDialog(element): void {
    const dialogRef = this.dialog.open(ProcesoEditarComponent, {
      width: '750px',
      data: { proceso: element}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);      
      try {        
        this.get();

      } catch (error) {
        console.log(error);
        this.get();
      }
    });
  }  

  estado(element){
    
    let setEstado = "1";
    let msn = "¿Seguro que desea Activar el proceso "
    console.log(element.activo);

    if(element.activo || element.activo == "1"){
      setEstado = "0"
      msn = "¿Seguro que desea Desactivar el proceso "
    }

    console.log(element);

    const dialogRef = this.dialog.open(ConfirmarComponent, {
      width: '500px',
      data: { titulo: msn + element.nombre + "?" }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);      
      if (result) {
        let parametro = {
          idProceso: element.idProceso,
          activo: setEstado
        }
    
        console.log(parametro);
    
        this.procesoServices.setEstado(parametro).then(res => {
          if (res.estado) {
            this.get();
            //this.openSnackBar("Proceso eliminado", 200);
          } else {                          
            console.log(res); 
          }
        });
      }else{
        this.get();
      } 
    });

  }


  generarToken(){
    let parametro = {
      estado: "ACCESO_PERMITIDO",
      flgAcceso: true,
      idPersona      :       "40363",
      idSesion      :       "83049",
      idUsuario      :       "77212",
      mensaje      :       "",
      nombre      :       "BARBIERI PIÑARRETA DANIEL EDUARDO",
      numDocumento      :       "10359156",
      observacion      :       "Usuario Autenticado",
      tipoContrato      :       null,
      tipoPersona      :       "20",
      token      :       "SlRFUlJPTkVTOjJmYWZmOTcyYWRmMDRjYTZiMDhjNjIwN2ZjNDRjNGI4",
      urls      :       "http://localhost:3000/",
      usuario      :       "JTERRONES"
    }
    this.procesoServices.generartoken(parametro).then(res => {
      if (res.estado) {
        console.log(res);        
        //this.get();
        //this.openSnackBar("Proceso eliminado", 200);
      } else {                          
        console.log(res); 
      }
    });
  }

  select(e){
    console.log(e);
    this.activo =  e;
    this.get();
  }

}
