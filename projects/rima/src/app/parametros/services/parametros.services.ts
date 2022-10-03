//import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { XsEndpoint, XsHttpApiService } from '@expertsystems/xs-angular-common';
import { XsAppGlobalsService } from '@expertsystems/xs-oefa-plusd-shared';
import { rima_endpoint } from '../../../util/endpoints';


@Injectable({
  providedIn: 'root'
})
export class parametrosServices {

  endpoint: XsEndpoint;

  constructor(
    public xsHttpApiService: XsHttpApiService,
    private xsAppGlobalsService: XsAppGlobalsService
  ) {
    this.endpoint = rima_endpoint;
  }

  get(parametro): any {
    return this.xsHttpApiService.post(
        this.endpoint,
        '/proceso/listar', parametro
      );
  }

  agregar(parametro): any {
    return this.xsHttpApiService.post(
        this.endpoint,
        '/proceso/agregar', parametro
      );
  }

  editar(parametro): any {
    return this.xsHttpApiService.post(
        this.endpoint,
        '/proceso/editar', parametro
      );
  }

  eliminar(parametro): any {
    return this.xsHttpApiService.post(
        this.endpoint,
        '/proceso/eliminar', parametro
      );
  }

  validar(parametro): any {
    return this.xsHttpApiService.post(
        this.endpoint,
        '/proceso/validar', parametro
      );
  }

  generartoken(parametro): any {
    return this.xsHttpApiService.post(
        this.endpoint,
        '/token/generartoken', parametro
      );
  }

  setEstado(parametro): any {
    return this.xsHttpApiService.post(
        this.endpoint,
        '/proceso/setEstado', parametro
      );
  }

  generartoken2(parametro): any {
    return this.xsHttpApiService.post(
        this.endpoint,
        '/token/confirmsso2', parametro
      );
  }



}
