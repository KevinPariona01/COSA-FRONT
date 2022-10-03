import {Injectable} from '@angular/core';
import {XsEndpoint, XsHttpApiService} from '@expertsystems/xs-angular-common';
import {XsAppGlobalsService} from '@expertsystems/xs-oefa-plusd-shared';
import {rima_endpoint} from '../../../util/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {
  APPLICATION_OEFA_RIMA_API_ENDPOINT: XsEndpoint;

  constructor(
    public xsHttpApiService: XsHttpApiService,
    private xsAppGlobalsService: XsAppGlobalsService
  ) {
    this.APPLICATION_OEFA_RIMA_API_ENDPOINT = rima_endpoint;
  }


  agregarAlfresco(parametro): any {
    parametro.audCreadoPor = this.xsAppGlobalsService.USUARIO_WINDOWS;
    return this.xsHttpApiService.post(
      this.APPLICATION_OEFA_RIMA_API_ENDPOINT,
      '/archivo/agregar-alfresco', parametro
    );
  }

  obtenerUrlDescarga(parametro): any {
    return this.xsHttpApiService.post(
      this.APPLICATION_OEFA_RIMA_API_ENDPOINT,
      '/archivo/consultar-alfresco', parametro
    );
  }
}
