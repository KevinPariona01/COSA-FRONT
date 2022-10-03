//import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { XsEndpoint, XsHttpApiService } from '@expertsystems/xs-angular-common';
import { XsAppGlobalsService } from '@expertsystems/xs-oefa-plusd-shared';
import { rima_endpoint } from '../../../util/endpoints';


@Injectable({
  providedIn: 'root'
})
export class loginServices {

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
      '/usuario/listar', parametro
    );
  }

  obtenerAcceso(parametro): any {
    return this.xsHttpApiService.post(
      this.endpoint,
      '/usuario/login', parametro
    );
  }


}
