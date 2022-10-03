export interface XsRestServiceResponse<T> {
  mensajeError: string;
  estado: boolean;
  content: T
}
