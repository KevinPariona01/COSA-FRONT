import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmarComponent } from '../../../general/confirmar/confirmar.component';
import { CatalogoService } from '../../services/catalogo.service';
import { CatalogoBaseEditarComponent } from '../catalogo-base-editar/catalogo-base-editar.component';
import { CatalogoEditarComponent } from '../catalogo-editar/catalogo-editar.component';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  //Header
  displayedColumns: string[] = [
    'id',
    'valor',
    'nombre',
    'descripcion',
    'estado',
    'accion',
  ];
  //Lista de catalogos
  public catalogos = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  //Filtro de padres
  idCatalagoPadre = '';

  //Lista de padres
  padres: any = [];
  activo = '';

  ngAfterViewInit() {
    this.catalogos.paginator = this.paginator;
  }

  constructor(
    public catalogoService: CatalogoService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getCatalogos();
    this.getCatalogosPadres();
  }

  //Obtener Catalogos
  getCatalogos() {
    let parametros = {
      idCatalogo: this.idCatalagoPadre,
    };
    this.catalogoService.listar(parametros).then((res) => {
      res.content.dataSource.forEach((element) => {
        if (element.activo == '1') {
          element.activo = true;
        } else {
          element.activo = false;
        }
      });
      this.catalogos = new MatTableDataSource<any>(res.content.dataSource);
      this.catalogos.sort = this.sort;
      this.catalogos.paginator = this.paginator;
      console.log('res', res.content.dataSource);
      console.log('catalogo', this.catalogos);
    });
  }

  //Obtener Catalogos Padres
  getCatalogosPadres() {
    this.catalogoService.listarPadre({}).then((res) => {
      this.padres = res.content.dataSource;
      console.log('res', res.content.dataSource);
      console.log('padres', this.padres);
    });
  }

  //Activar filtro de catalogos
  select(value) {
    console.log(value);
    this.idCatalagoPadre = value;
    this.getCatalogos();
  }

  //Filtro por letras
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.catalogos.filter = filterValue.trim().toLowerCase();
  }

  //Emergente desactivar
  estado(element) {
    let setEstado = '1';
    let msn = '¿Seguro que desea Activar el catalogo ';
    console.log(element.activo);

    if (element.activo || element.activo == '1') {
      setEstado = '0';
      msn = '¿Seguro que desea Desactivar el catalogo ';
    }
    console.log(element);
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      width: '700px',
      data: { titulo: msn + element.etiqueta + '?' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        let parametro = {
          idItem: element.idItem,
          activo: setEstado,
        };
        console.log(parametro);
        this.catalogoService.setEstado(parametro).then((res) => {
          if (res.estado) {
            this.getCatalogos();
            this.getCatalogosPadres();
          } else {
            console.log(res);
          }
        });  
      } else {
        this.getCatalogos();
        this.getCatalogosPadres();
      }
    });
  }

  //Actualizar Item
  edit(element) {
    const dialogRef = this.dialog.open(CatalogoEditarComponent, {
      width: '750px',
      panelClass: 'custom-dialog-container',
      data: { catalogo: element },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      try {        
        this.getCatalogos();
        this.getCatalogosPadres();

      } catch (error) {
        console.log(error);
        this.getCatalogos();
        this.getCatalogosPadres();
      }
    });
  }
}
