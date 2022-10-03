import { Routes } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MenuComponent } from './menu/views/menu/menu.component';
import { LoginComponent } from './acceso/views/login/login.component';
import { ArchivoComponent } from './archivo/views/archivo.component';
import { ParametrosComponent } from './parametros/views/parametros/parametros.component';
import { GetTokenComponent } from './general/get-token/get-token.component';
import { EstadisticaComponent } from './dashboard/views/estadistica/estadistica.component';
import { ProcesoComponent } from './procesos/views/proceso/proceso.component';
import { CatalogoComponent } from './catalogos/views/catalogo/catalogo.component';
import { ConflictoComponent } from './conflictos/views/conflicto/conflicto.component';
import { ConflictoEditarComponent } from './conflictos/views/conflicto-editar/conflicto-editar.component';
import { ConflictoSeguimientoComponent } from './conflictos/views/conflicto-seguimiento/conflicto-seguimiento.component';

export const APP_ROUTES: Routes = [
  {    path: '',    component: GetTokenComponent,     pathMatch: 'full',    data: { titlePage: 'TOKEN' },  },
  {    path: 'procesos',    component: ProcesoComponent,    pathMatch: 'full',    data: { titlePage: 'PROCESOS' },  }, 
  {    path: 'gettoken',    component: GetTokenComponent,    pathMatch: 'full',    data: { titlePage: 'TOKEN' },  },
  {    path: 'estadistica',    component: EstadisticaComponent,    pathMatch: 'full',    data: { titlePage: 'TOKEN' },  }, 
  {    path: 'catalogo',    component: CatalogoComponent,    pathMatch: 'full',    data: { titlePage: 'TOKEN' },  }, 
  {    path: 'conflicto',    component: ConflictoComponent,    pathMatch: 'full',    data: { titlePage: 'TOKEN' },  }, 
  {    path: 'conflicto-editar/:id',    component: ConflictoEditarComponent,    pathMatch: 'full',    data: { titlePage: 'TOKEN' },  }, 
  {    path: 'conflicto-seguimiento',    component: ConflictoSeguimientoComponent,    pathMatch: 'full',    data: { titlePage: 'TOKEN' },  }, 
];
