import { Injectable } from '@angular/core';
import { XsEndpoint, XsHttpApiService } from '@expertsystems/xs-angular-common';
import { XsAppGlobalsService } from '@expertsystems/xs-oefa-plusd-shared';
import { rima_endpoint } from 'projects/rima/src/util/endpoints';

@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
  endpoint: XsEndpoint;

  constructor(
    public xsHttpApiService: XsHttpApiService,
    private xsAppGlobalsService: XsAppGlobalsService
  ) {
    this.endpoint = rima_endpoint;
  }

  listar(parametro): any {
    return this.xsHttpApiService.post(
      this.endpoint,
      '/catalogo/listar',
      parametro
    );
  }

  listarPadre(parametro): any {
    return this.xsHttpApiService.post(
      this.endpoint,
      '/catalogo/listarPadre',
      parametro
    );
  }

  insertar(parametro): any {
    return this.xsHttpApiService.post(
      this.endpoint,
      '/catalogo/insertar',
      parametro
    );
  }

  modificar(parametro): any {
    return this.xsHttpApiService.post(
      this.endpoint,
      '/catalogo/modificar',
      parametro
    );
  }

  setEstado(parametro): any {
    return this.xsHttpApiService.post(
        this.endpoint,
        '/catalogo/setEstado', parametro
      );
  }

  validar(parametro): any {
    return this.xsHttpApiService.post(
        this.endpoint,
        '/catalogo/validar', parametro
      );
  }
}
