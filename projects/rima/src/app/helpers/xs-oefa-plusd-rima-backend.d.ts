/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.33.956 on 2022-04-04 15:01:52.

export interface ParametroDTOParametro {
  tipoParametro?: string;
  id?: string;
  idPadre?: string;
  nombre?: string;
  nroOrden?: string;
  idSigno?: string;
  idComponente?: number;
  descripcion?: string;
  idParametroDet?: number;
  idCompIesRedmon?: string;
  idInformeEnsayo?: number;
  idIesRedMonitoreo?: number;
  idEquipo?: number;
  nombrePunto?: string;
  componente?: string;
  checked?: boolean;
  codigoControl?: string;
  signoResultado?: string;
  valorResultado?: string;
  unidadMedidaRes?: string;
}

export interface DTORespuestaSigno {
  idSigno?: string;
  listaSigno?: ParametroDTOParametro[];
}

export interface DTOCabeceraReporte {
  txAdministrado?: string;
  txUnidadFiscalizable?: string;
  codigoAccion?: string;
  tdr?: string;
  expediente?: string;
  finRegistro?: string;
  txDireccion?: string;
  txInstrumento?: string;
  idCadenaCustodia?: number;
  idLineaBase?: number;
  unidadEvaluacion?: string;
  areaEstudio?: string;
  txLineaBase?: string;
  tipoMonitoreo?: string;
  tipo?: string;
}

export interface DTOCadenaCustodia {
  idCadenaCustodia?: number;
  dni?: string;
  datosPersona?: string;
  telefono?: string;
  correo?: string;
  dnisec?: string;
  datosPersonasec?: string;
  telefonosec?: string;
  correosec?: string;
  idArchivo?: number;
  fechaEnviomues?: Date;
  fechaRecibomues?: Date;
  horaRecepmues?: string;
  observ?: string;
  idLaboratorio?: number;
  audCreadoPor?: string;
  audFechaCreacion?: Date;
  audModificadoPor?: string;
  audFechaModificacion?: Date;
  audEliminadoPor?: string;
  audFechaEliminado?: Date;
  codigoAccion?: string;
  tdr?: string;
  administrado?: string;
  feinicio?: Date;
  fefin?: Date;
  unidadFisca?: string;
  ubicacion?: string;
  nroExpediente?: string;
  tipoSup?: string;
  tipo?: string;
  fInicio?: Date;
  fCierre?: Date;
  idSubsector?: string;
  codigoUfi?: string;
  rucAdministrado?: string;
  idUfi?: string;
  idAdministrado?: string;
  ruc?: string;
  nombreLaboratorio?: string;
  idReque?: string;
  idPlanMonitoreo?: number;
  idMuestra?: number;
  estado?: string[];
  tdrCod?: string;
  resul?: string;
  nombre?: string;
  id?: number;
  nombreArchivo?: string;
  nombreArchivoOriginal?: string;
  rutaAlfresto?: string;
  uiid?: string;
  estadoRegistro?: string;
  tipoMonitoreo?: string;
  respuesta?: number;
  origenRegistro?: string;
  tipoRevision?: string;
  txFechaInicio?: string;
  txFechaFin?: string;
  frmMuestra?: boolean;
  listaEstado?: string;
  usuario?: string;
  txEstado?: string;
  estadoDesc?: string;
  areaEstudio?: string;
  unidadEvaluacion?: string;
}

export interface DTOCadenaCustodiaRespuesta {
  dataSource?: DTOCadenaCustodia[];
  listarEscoPreserva?: DTOCadenaCustodia[];
  datoscustodia?: DTOCadenaCustodia;
  listaCodAccion?: DTOPlanMonitoreo[];
  listartdr?: DTORequerimiento[];
  listaSubSector?: DTOSubsector[];
}

export interface DTOCadenaCustodiaSolicitud {
  idCadenaCustodia?: number;
  dni?: number;
  datosPersona?: string;
  telefono?: string;
  fechaEnviomues?: Date;
  fechaRecibomues?: Date;
  horaRecepmues?: string;
  observ?: string;
  idLaboratorio?: number;
  cadenacus?: string;
  tipo?: string;
  tipoConsultar?: string;
  idPlanMonitoreo?: number;
  resul?: string;
  buscar?: string;
  filtrarAccion?: string;
  codigoAccion?: string;
  rucAdministrado?: string;
  idUfi?: string;
  idAdministrado?: string;
  idSubsector?: string;
  idUnidadEvaluacion?: number;
  idAreaEstudio?: number;
  idexpediente?: string;
  tdr?: string;
  estado?: boolean;
  estadoDesc?: string;
  origenRegistro?: string;
  tipoRevision?: string;
  txFechaInicio?: string;
  txFechaFin?: string;
  feinicio?: Date;
  fefin?: Date;
}

export interface DTOCadenaEstado {
  idCadenaEstado?: number;
  cadenaEstado?: string;
}

export interface DTOCadenaEstadoRespuesta {
  dataSource?: DTOCadenaEstado[];
  estadoescogido?: DTOCadenaEstado[];
}

export interface DTOCadenaEstadoSolicitud {
  idCadenaEstado?: number;
  cadenaEstado?: string;
  idCadenaCustodia?: number;
}

export interface ComponenteDTOComponente {
  idComponente?: number;
  idPadre?: string;
  nivel?: number;
  componente?: string;
  idPlanMonitoreo?: number;
  idRedMonitoreo?: number;
  idRedMonComponente?: number;
  usuario?: string;
  codigoUfi?: string;
  codTipoFuente?: string;
  isChild?: boolean;
  idChecked?: boolean;
  selectComponente?: boolean;
  tipoMonitoreo?: string;
  idFuente?: number;
  disabled?: boolean;
  idIesRedMonitoreo?: number;
  codigo?: string;
  isChecked?: boolean;
  respuesta?: number;
  parametroAdicional?: boolean;
  taxonomia?: boolean;
  tooltip?: string;
  idCompIesRedmon?: string;
  tipoModulo?: string;
  subModulo?: string;
  idInformeEnsayo?: number;
  idEquipo?: number;
  esPuntoAdicional?: boolean;
  fuentePunto?: string;
  estadoRegistro?: boolean;
  res?: string;
}

export interface DTOComponenteParamRespuesta {
  listaComponente?: ComponenteDTOComponente[];
  listaParametro?: DTOInformeResultado[];
}

export interface DocumentoDTODocumento {
  idDocumento?: number;
  nombre?: string;
  idTipoDocumento?: string;
  tipoDocumento?: string;
  idArchivo?: number;
  idInformeMonitoreo?: number;
  idLineaBase?: number;
  idCadenaCustodia?: number;
  idPlanMonitoreo?: number;
  usuario?: string;
  audCreadoPor?: string;
  audModificadoPor?: string;
  audfechaCreacion?: string;
  audFechaModificacion?: Date;
  tipoMonitoreo?: string;
  nombreArchivo?: string;
  nombreArchivoOriginal?: string;
  rutaAlfresto?: string;
  uiid?: string;
  idFrecuenciaReporte?: number;
  textFrecuenciareporte?: string;
  modulo?: string;
  checked?: boolean;
  fgArchivoPrincipal?: number;
  respuesta?: number;
}

export interface DTODocumentoRespuesta {
  dataSource?: DocumentoDTODocumento[];
  documento?: DocumentoDTODocumento;
  listaTipoDocumento?: ParametroDTOParametro[];
}

export interface DTOEquipo {
  idEquipo?: number;
  nombre?: string;
  marca?: string;
  nroOrigenEquipo?: number;
  nroSerieEquipo?: string;
  modelo?: string;
  fechaInicial?: Date;
  fechaFinal?: Date;
  idArchivo?: number;
  idCadenaCustodia?: number;
  idInformeMonitoreo?: number;
  tipoMonitoreo?: string;
  idLineaBase?: number;
  usuario?: string;
  audCreadoPor?: string;
  audModificadoPor?: string;
  audfechaCreacion?: Date;
  audFechaModificacion?: Date;
  nombreArchivo?: string;
  nombreArchivoOriginal?: string;
  rutaAlfresto?: string;
  uiid?: string;
  txFechaInicial?: string;
  txFechaFinal?: string;
}

export interface DTOFrecuenciaMonitoreo {
  idEtapa?: number;
  idFrecuenciaMonitoreo?: number;
  txEtapa?: string;
  txFrecuenciaMonitoreo?: string;
  nombre?: string;
  id?: string;
}

export interface GenericoDTO {
  id?: number;
  text?: string;
  name?: string;
  idPadre?: string;
  isChild?: boolean;
  hasChild?: boolean;
  nivel?: number;
  tipo?: number;
  idCtrl?: number;
  cantidad?: number;
  isChecked?: string;
  id2?: string;
  idComp?: number;
  idParm?: number;
  idIesParametroMed?: number;
  idIesRedMonitoreo?: number;
  idComponente?: number;
  nombre?: string;
  descripcion?: string;
  tipoConsulta?: number;
  idRedMonitoreo?: number;
  idParametro?: number;
  parametroAdicional?: boolean;
  idSubSector?: string;
  idParametroJerarquia?: number;
  codigo?: string;
  tipoMonitoreo?: string;
  clase?: string;
  expanded?: string;
  txFiltro?: string;
  idProvincia?: number;
  respuesta?: number;
  tooltip?: string;
  idNorma?: number;
  tieneAnexo?: boolean;
  puntoPlanificado?: boolean;
  idTipoParametro?: number;
  txTipoParametro?: string;
  txListaNorma?: string;
  listaParamametros?: GenericoDTO[];
  idPlanMonitoreo?: number;
  esTipoParametro?: boolean;
}

export interface DTOAgregarEquipoEnsayo {
  id?: number;
  idComponente?: number;
  idModulo?: number;
  checked?: number;
  respuesta?: number;
  usuario?: number;
  idIesRedMonitoreo?: number;
  idEquipo?: number;
  idInformeEnsayo?: number;
  tipoModulo?: string;
  tipoMonitoreo?: string;
  subModulo?: string;
}

export interface DTOInformeEnsayo {
  idInformeEnsayo?: number;
  nroInformeEnsayo?: string;
  audCreadoPor?: string;
  fechaCreacion?: Date;
  audModificadoPor?: string;
  fechaModificado?: Date;
  idLaboratorio?: number;
  nombreLaboratorio?: string;
  ruc?: string;
  idArchivo?: number;
  idPlanMonitoreo?: number;
  idCadenaCustodia?: number;
  idInformeMonitoreo?: number;
  tipoMonitoreo?: string;
  idLineaBase?: number;
  usuario?: string;
  nombreArchivo?: string;
  nombreArchivoOriginal?: string;
  rutaAlfresto?: string;
  uiid?: string;
  idInformeEnsayoCus?: number;
  selected?: boolean;
  busqueda?: string;
  fechaEmision?: Date;
  fechaRecepcion?: Date;
  txFechaEmision?: string;
  txFechaRecepcion?: string;
  checked?: number;
  tipoModulo?: string;
  respuesta?: number;
  idEquipo?: number;
  codOrdenServicio?: string;
}

export interface DTOInformeEnsayoRespuesta {
  idInformeEnsayo?: number;
  dataSourceInformeLista?: DTOInformeEnsayo[];
  listaParametros?: DTOParametroInAsociar[];
  listaComponentes?: ComponenteDTOComponente[];
}

export interface DTOArchivoMpv {
  nombre?: string;
  uuid?: string;
}

export interface DTOArchivoSigedResul {
  nombrePunto?: string;
  archivos?: DTOArchivoMpv[];
}

export interface DTOInformeMonitoreo {
  idInformeMonitoreo?: number;
  idInstrumento?: number;
  idSubsector?: string;
  codigoUfi?: string;
  nombreUfi?: string;
  rucAdministrado?: string;
  idUfi?: string;
  idAdministrado?: string;
  nombreInformeMonitoreo?: string;
  fechaInicial?: Date;
  fechaFinal?: Date;
  fechaInicialText?: string;
  fechaFinalText?: string;
  fechaPresentacion?: Date;
  fechaPresentacionText?: string;
  audCreadoPor?: string;
  audFechaCreacion?: Date;
  audModificadoPor?: string;
  audFechaModificacion?: Date;
  usuario?: string;
  nombreInstrumento?: string;
  idFrecuenciaMonitoreo?: number;
  textFrecuenciaMonitoreo?: string;
  nombreAdministrado?: string;
  idEtapa?: string;
  txEtapa?: string;
  idFrecuenciaReporte?: string;
  txFrecuenciaReporte?: string;
  idPeriodo?: string;
  txPeriodo?: string;
  tipoConsulta?: number;
  estado?: number;
  txEstado?: string;
  listaInstrumentos?: number[];
  txInstrumentos?: string;
  respuesta?: number;
  txToolTip?: string;
  unidadFiscalizable?: string;
  direccion?: string;
  direccion_uf?: string;
  idCadenaCustodia?: number;
  idLineaBase?: number;
  tipo?: string;
  tipoMonitoreo?: string;
  copiarInforme?: boolean;
  txFechaRegistro?: string;
  fechaRegistroInicial?: Date;
  fechaRegistroFinal?: Date;
  idExpediente?: number;
  nroExpediente?: string;
  txExpediente?: string;
  idDocumento?: string;
  descripcionSiged?: string;
  idUsuarioLogin?: string;
  tipoReporte?: string;
  idIga?: number;
  tokenSso?: string;
  correo?: string;
}

export interface DTOInformeMonitoreoReporte {
  idPunto?: number;
  nombrePunto?: string;
  este?: string;
  norte?: string;
  referencia?: string;
  frecuenciaMonitoreo?: string;
  nombreParametro?: string;
  unidadMedida?: string;
  resultado?: string;
  valorComparacion?: string;
  norma?: string;
  nroInformeEnsayo?: string;
  componente?: string;
  horaResultado?: string;
  fechaResultado?: string;
  fechaInicial?: string;
  fechaFinal?: string;
  nombreEquipo?: string;
  observacionPunto?: string;
  observacionParametro?: string;
  esteResultado?: string;
  norteResultado?: string;
  referenciaResultado?: string;
  observacionResultado?: string;
  medioEnvio?: string;
  fechaEmisionEnsayo?: string;
  fechaRecepcionEnsayo?: string;
  limite?: string;
  codProyeccion?: string;
  coordX?: string;
  coordY?: string;
  nuAltitud?: string;
  latitGrados?: string;
  longGrados?: string;
  longMinutos?: string;
  longSegundos?: string;
  latitMinutos?: string;
  latitSegundos?: string;
  idSignoResultado?: string;
  idAcreditacion?: string;
  codigoControl?: string;
  tpoControl?: string;
  fuentePunto?: string;
  rucLaboratorio?: string;
  nombreLaboratorio?: string;
  coordProyeccion_?: string;
  coordEste_?: string;
  coordNorte_?: string;
  coordAltitud_?: string;
  coordDatum_?: string;
  coordZona_?: string;
  coordReferencia_?: string;
  coordObservacion_?: string;
  coordPrecision_?: string;
  acreditacion?: string;
  zonaPunto?: string;
  tipoPunto?: string;
  tipoObligacion?: string;
  obligacion?: string;
  etapa?: string;
  periodoMonitoreo?: string;
  condicionMuestra?: string;
  signo?: string;
  marcaEquipo?: string;
  modeloEquipo?: string;
  nroSerieEquipo?: string;
  fechaCalibracionEquipo?: string;
  signoNormativa?: string;
  unidadMedidaNormativa?: string;
}

export interface DTOInformeMonitoreoRespuesta {
  dataSource?: DTOInformeMonitoreo[];
  informeMonitoreo?: DTOInformeMonitoreo;
  lineaBase?: DTOLineaBase;
  supervision?: DTOMonitoreoSupervision;
  cadena?: DTOCadenaCustodia;
  evaluacion?: DTOMonitoreoEvaluacion;
  listaUfi?: DTOObligacion[];
  listaSubsector?: DTOSubsector[];
  listaAdmi?: DTOObligacion[];
  listaIga?: DTOObligacion[];
  listaEtapa?: ParametroDTOParametro[];
  listaFrecuenciaMonitoreo?: ParametroDTOParametro[];
  listaFrecuenciaReporte?: ParametroDTOParametro[];
  listaObligaciones?: ParametroDTOParametro[];
  listPeriodos?: ParametroDTOParametro[];
  fechaActual?: Date;
  laboratorio?: DTOLaboratorioDetalle;
  idFrecuenciaReporteSelec?: string;
}

export interface DTOInformeMonitoreoSolicitud {
  idInformeMonitoreo?: number;
  idSubsector?: string;
  idInstrumento?: number;
  codigoUfi?: string;
  rucAdministrado?: string;
  idUfi?: string;
  idAdministrado?: string;
  nombreInformeMonitoreo?: string;
  tipoMonitoreo?: string;
  usuario?: string;
  idLineaBase?: number;
  idPlanMonitoreo?: number;
  idCadenaCustodia?: number;
  tipo?: number;
  filtro?: string;
  idEquipo?: number;
  idFuente?: number;
  idInformeEnsayo?: number;
  idRedMonitoreo?: number;
  opcion?: string;
  origen?: string;
  codigoObligacion?: string;
  codigoAccion?: string;
  tipoModulo?: string;
  StartDate?: Date;
  EndDate?: Date;
}

export interface DTOInformePunto {
  listInformes?: DTOInformeMonitoreo[];
  listPuntos?: DTORedMonitoreo[];
}

export interface DTOLaboratorioDetalle {
  subSector?: string;
  unidadFiscalizable?: string;
  administrado?: string;
  unidadEvaluacion?: string;
  areaEstudio?: string;
  tipoModulo?: string;
  codigoAccion?: string;
}

export interface DTOPuntoFoto {
  idIesRedMonitoreo?: number;
  idFoto?: number;
  idArchivo?: number;
  usuario?: string;
  uiid?: string;
  nombreFoto?: string;
  idsArchivo?: string;
  nombrePunto?: string;
}

export interface DTOFrecuenciaMuestraDetalle {
  listFrecuenciaMonitoreo?: DTOFrecuenciaMonitoreo[];
  listPeriodoMonitoreo?: GenericoDTO[];
  resultado?: DTOInformeResultado;
}

export interface DTOInformeResultado {
  idInfMonResultado?: number;
  idInformeEnsayo?: number;
  idEquipo?: number;
  idControlCalAmbPar?: number;
  signoResultado?: string;
  valorResultado?: string;
  unidadResultado?: number;
  metodoEnsayo?: string;
  coordenadaEste?: number;
  coordenadaNorte?: number;
  fechaInicial?: Date;
  fechaFinal?: Date;
  audCreadoPor?: string;
  audModificadoPor?: string;
  unidadMedidaRes?: string;
  idIesConsolidado?: number;
  idIesParametroMed?: number;
  tipoMonitoreo?: string;
  idMetodoEnsayo?: string;
  idParametro?: number;
  idRedMonCompParam?: number;
  idRedMonComponente?: number;
  idIesRedMonitoreo?: number;
  nombreParametro?: string;
  parametroDescripcion?: string;
  valorUnico?: string;
  valorRangoInicial?: string;
  valorRangoFinal?: string;
  componente?: string;
  usuario?: string;
  frecuenciaMonitoreo?: string;
  periodoMonitoreo?: string;
  txPeriodo?: string;
  idAcreditacion?: string;
  normativa?: string;
  normativaDescripcion?: string;
  idComponente?: number;
  listaFrecuenciaMon?: GenericoDTO[];
  idFrecuenciaMonitoreo?: number;
  idLimite?: string;
  idPeridoMonitoreo?: string;
  listaSigno?: ParametroDTOParametro[];
  codFuenteRedMon?: number;
  codigo?: string;
  taxonomia?: boolean;
  listaLimite?: ParametroDTOParametro[];
  listaFrecuenciaMonitoreo?: DTOFrecuenciaMonitoreo[];
  idEtapa?: string;
  idFrecu?: string;
  idFrecuenciaReporte?: string;
  respuesta?: number;
  idRedMonitoreo?: number;
  idRedMonPar?: number;
  idCtrlCalAmbPar?: number;
  esPuntoAdicional?: boolean;
  esParametroAdicional?: boolean;
  listUnidadMedida?: DTOUnidadMedida[];
  idFrecuenciaReporteResultado?: string;
  checked?: number;
  parametroAdicional?: number;
  listaParamametros?: GenericoDTO[];
  incertidumbre?: string;
  idEstadoCalidad?: string;
}

export interface DTOMetodoAnalisis {
  id?: number;
  txMetodoAnalisis?: string;
  tipo?: number;
  usuario?: string;
}

export interface DTOObservacion {
  id?: number;
  txObservacion?: string;
  tipo?: number;
  usuario?: string;
}

export interface DTOUnidadMedida {
  id?: string;
  nombre?: string;
}

export interface DTOToken {
  user?: string;
  password?: string;
  token?: string;
  status2?: boolean;
  message2?: string;
  urlSunat?: string;
  urlVideo?: string;
  idAdministrador?: string;
  idSupervisor?: string;
  idUsuarioPrincipal?: string;
  idUsuarioSecundario?: string;
}

export interface DTOUser {
  jti?: string;
  sub?: string;
  authorities?: string[];
  iat?: number;
  exp?: number;
}

export interface JWT {
  token?: string;
  status2?: boolean;
  message2?: string;
  tipoIdentificacion?: string;
  nroIdentificacion?: string;
  urlmpv?: string;
}

export interface DTOLineaBase {
  idLineaBase?: number;
  idObligacion?: number;
  idSubsector?: string;
  codigoUfi?: string;
  rucAdministrado?: string;
  idUfi?: string;
  idAdministrado?: string;
  nombreLineaBase?: string;
  unidadFiscalizable?: string;
  nombreObligacion?: string;
  codigoObligacion?: string;
  fechaInicial?: Date;
  fechaFinal?: Date;
  audCreadoPor?: string;
  audFechaCreacion?: Date;
  audModificadoPor?: string;
  audFechaModificacion?: Date;
  usuario?: string;
  fechaAprobacion?: Date;
  idArchivo?: number;
  nombreArchivo?: string;
  nombreArchivoOriginal?: string;
  rutaAlfresto?: string;
  uiid?: string;
  estado?: string;
  obsLineaBase?: string;
}

export interface DTOLineaBaseRespuesta {
  dataSource?: DTOLineaBase[];
  lineaBase?: DTOLineaBase;
  listaUfi?: DTOObligacion[];
  listaSubsector?: DTOSubsector[];
}

export interface DTOLineaBaseSolicitud {
  idLineaBase?: number;
  idSubsector?: string;
  codigoUfi?: string;
  rucAdministrado?: string;
  idUfi?: string;
  idAdministrado?: string;
  usuario?: string;
  fechaInicial?: Date;
  fechaFinal?: Date;
  codigoObligacion?: string;
  obsLineaBase?: string;
}

export interface DTOMonitoreoEvaluacion {
  idPlanMonitoreo?: number;
  idSubsector?: string;
  codigoUfi?: string;
  rucAdministrado?: string;
  idUfi?: string;
  idAdministrado?: string;
  tipoPlan?: string;
  codigoAccion?: string;
  idAccion?: number;
  unidadOrga?: string;
  coordinacion?: string;
  fechaInicial?: Date;
  fechaFinal?: Date;
  supervision?: string;
  audCreadoPor?: string;
  audFechaCreacion?: Date;
  audModificadoPor?: string;
  audFechaModificacion?: Date;
  nombre?: string;
  id?: number;
  idexpediente?: string;
  idAreaEstudio?: number;
  idCadenaCustodia?: number;
}

export interface DTOMonitoreoEvaluacionRespuesta {
  dataSource?: DTOMonitoreoEvaluacion[];
  listarUnidades?: DTOMonitoreoEvaluacion[];
  listarAreas?: DTOMonitoreoEvaluacion[];
  listaSubSector?: DTOSubsector[];
  lineaObligacion?: DTOObligacion[];
  lineaUnidad?: DTOObligacion[];
}

export interface DTOMonitoreoEvaluacionSolicitud {
  idPlanMonitoreo?: number;
  idSubsector?: string;
  codigoUfi?: string;
  rucAdministrado?: string;
  idUfi?: string;
  idAdministrado?: string;
  tipoPlan?: string;
  codigoAccion?: string;
  unidadOrga?: string;
  coordinacion?: string;
  fechaInicial?: Date;
  fechaFinal?: Date;
  evaluacion?: string;
  idCadenaCustodia?: number;
  idUnidadEvaluacion?: number;
}

export interface DTOMonitoreoSupervision {
  idPlanMonitoreo?: number;
  idSubsector?: string;
  codigoUfi?: string;
  rucAdministrado?: string;
  idUfi?: string;
  idAdministrado?: string;
  tipoPlan?: string;
  codigoAccion?: string;
  idAccion?: number;
  unidadOrga?: string;
  coordinacion?: string;
  fechaInicial?: Date;
  fechaFinal?: Date;
  supervision?: string;
  audCreadoPor?: string;
  audFechaCreacion?: Date;
  audModificadoPor?: string;
  audFechaModificacion?: Date;
  idCadenaCustodia?: number;
}

export interface DTOMonitoreoSupervisionRespuesta {
  dataSource?: DTOMonitoreoSupervision[];
  listaSubSector?: DTOSubsector[];
  lineaObligacion?: DTOObligacion[];
  lineaUnidad?: DTOObligacion[];
}

export interface DTOMonitoreoSupervisionSolicitud {
  idPlanMonitoreo?: number;
  idSubsector?: string;
  codigoUfi?: string;
  rucAdministrado?: string;
  idUfi?: string;
  idAdministrado?: string;
  tipoPlan?: string;
  codigoAccion?: string;
  unidadOrga?: string;
  coordinacion?: string;
  fechaInicial?: Date;
  fechaFinal?: Date;
  supervision?: string;
  idCadenaCustodia?: number;
}

export interface DTOCondicionMuestra {
  id?: string;
  nombre?: string;
}

export interface DTOMedioEnvioMuestra {
  id?: string;
  nombre?: string;
}

export interface DTOMuestra {
  idMuestra?: number;
  horaMuestra?: string;
  medio?: string;
  preservante?: string;
  preservantedetalle?: string;
  preservanteotro?: string;
  preservanteotrodetalle?: string;
  envaplastico?: number;
  envavidrio?: number;
  envaesteri?: number;
  idCadenaCustodia?: number;
  idIesRedMonitoreo?: number;
  audCreadoPor?: string;
  audFechaCreacion?: Date;
  audModificadoPor?: string;
  audFechaModificacion?: Date;
  estadopreservante?: number[];
  idIesParametroMed?: number;
  idIesParametroMedOri?: number;
  fechaMuestraInicial?: Date;
  horaMuestraInicial?: Date;
  fechaMuestraFinal?: Date;
  horaMuestraFinal?: Date;
  respuesta?: number;
  tipoMonitoreo?: string;
  usuario?: string;
  listaPreservantes?: string;
  frmPreservante?: boolean;
  estadoRegFecha?: number;
  txHoraMuestraInicial?: string;
  txHoraMuestraFinal?: string;
  idCondicionMuestra?: string;
  idMedioEnvio?: string;
  idTipoMuestra?: string;
  idComponente?: number;
  idEtapa?: string;
  idFrecuenciaMonitoreo?: string;
  idPeriodo?: string;
  idInfMonResultado?: string;
  metodoAnalisis?: string;
}

export interface DTOMuestraRespuesta {
  datosmuestra?: DTOMuestra;
  listCondicionMuestra?: DTOCondicionMuestra[];
  listaMedioEnvio?: DTOMedioEnvioMuestra[];
  listaTipoMuestra?: DTOMedioEnvioMuestra[];
  fuentePunto?: string;
}

export interface DTOObligacion {
  idObligacion?: number;
  idSubsector?: string;
  codigoObligacion?: string;
  nombreObligacion?: string;
  codigoUnidadFiscal?: string;
  unidadFiscalizable?: string;
  codigoUfi?: string;
  rucAdministrado?: string;
  administrado?: string;
  tipoObligacion?: string;
  fechaVigenciaInicial?: Date;
  fechaVigenciaFinal?: Date;
  audCredoPor?: string;
  audFechaCreacion?: Date;
  audModificadoPor?: string;
  audFechaModificacion?: Date;
  iga?: string;
  id?: string;
  nombre?: string;
}

export interface DTOObligacionSolicitud {
  codigoUfi?: string;
  rucAdministrado?: string;
  idAdministrado?: string;
  idSubsector?: string;
  administrado?: string;
}

export interface DTOParametroInAsociar {
  codigoPunto?: string;
  nombreParametro?: string;
  nombrePunto?: string;
  signo?: string;
  valor?: string;
  unidad?: string;
  idInformeEnsayo?: number;
  idEquipo?: number;
  idResultado?: number;
  tipo?: string;
  checked?: boolean;
  valorDescripcion?: string;
  valorRangoInicial?: number;
  valorRangoFinal?: number;
  componente?: string;
  idComponente?: number;
  idParametroDet?: number;
}

export interface DTOParametroMedicion {
  idParametro?: number;
  idRedMonCompParam?: number;
  idRedMonComponente?: number;
  idPlanMonitoreo?: number;
  idComponente?: number;
  idIesRedMonitoreo?: number;
  idIesParametroMed?: number;
  idRedMonitoreo?: number;
  idControlCalAmbPar?: number;
  nombreParametro?: string;
  signo?: string;
  valorUnico?: string;
  valorRangoInicial?: string;
  valorRangoFinal?: string;
  audCreadoPor?: string;
  audModificadoPor?: string;
  parametroDescripcion?: string;
  selected?: boolean;
  codigoMonitoreo?: string;
  tipoValor?: string;
  frecuencia?: string;
  tipoParametro?: string;
  idEtapa?: string;
  idFrecuenciaMonitoreo?: string;
  idFrecuenciaReporte?: string;
  idFrecuenciaReporteMulti?: string[];
  usuario?: string;
  codTipoFuente?: string;
  estadoRegistro?: boolean;
  codigoUfi?: string;
  isChecked?: boolean;
  fuente?: string;
  tipoConsulta?: number;
  tipoMonitoreo?: string;
  idFuente?: number;
  idObligacion?: string;
  descripcionObligacion?: string;
  codigoObligacion?: string;
  checked?: number;
  primerRegistro?: number;
  idInformeMonitoreo?: number;
  idCadenaCustodia?: number;
  idLineaBase?: number;
  norma?: string;
  txObligacion?: string;
  puntoPlanificado?: boolean;
  esParametroAdicional?: boolean;
  idCtrlCalAmbPar?: number;
  fgResultado?: number;
  respuesta?: number;
  listaParamametros?: GenericoDTO[];
}

export interface DTOParametroMedicionSolicitud {
  idIesRedMonitoreo?: number;
  idRedMonitoreo?: number;
  idIesParametroMed?: number;
  idInformeMonitoreo?: number;
  idLineaBase?: number;
  idCadenaCustodia?: number;
  idPlanMonitoreo?: number;
  idSubsector?: string;
  nombreParametro?: string;
  codigoUfi?: string;
  rucAdministrado?: string;
  tipoMonitoreo?: string;
  usuario?: string;
  codigoObligacion?: string;
  codigoUf?: string;
}

export interface DTOPersona {
  ApellidoMaterno?: string;
  ApellidoPaterno?: string;
  Codigo?: number;
  CodigoUsuario?: string;
  Direccion?: string;
  EsValido?: boolean;
  EstadoCivil?: number;
  FechaNacimiento?: string;
  Genero?: number;
  HabidoReniec?: number;
  IdAplicacion?: number;
  IdSesion?: number;
  Mensaje?: string;
  NombreCompleto?: string;
  Nombres?: string;
  NroDocumento?: string;
  RUC?: string;
  CorreoElectronico?: string;
  Clave?: string;
  Observacion?: string;
  RepLegal?: DTORepresentanteLegal[];
  TipoDocumento?: number;
  TipoPersona?: number;
  Ubigeo?: string;
  IdTipoUsuario?: number;
  idUsuario?: number;
  idPersona?: number;
  codObser?: string;
  nuDniConsulta?: number;
  password?: number;
  nuDniUsuario?: number;
  nuRucUsuario?: number;
}

export interface DTOPersonaSolicitud {
  ruc?: string;
  idSesion?: number;
  nroDNIConsulta?: string;
  usuario?: string;
  clave?: string;
}

export interface DTORepresentanteLegal {
  ApellidoMaterno?: string;
  ApellidoPaterno?: string;
  CodCargo?: string;
  Direccion?: string;
  IdPersona?: number;
  NombreCargo?: string;
  NombreCompleto?: string;
  Nombres?: string;
  NroDocumento?: string;
  TipoDocumento?: number;
  Ubigeo?: string;
}

export interface DTOPlanMonitoreo {
  idPlanMonitoreo?: number;
  idSubSector?: number;
  codigoAccion?: string;
  ruc?: string;
  unidadFisca?: string;
  tipo?: number;
  unidOrganica?: string;
  coordinacion?: string;
  fechainicio?: Date;
  fechafin?: Date;
  fgsitreg?: string;
  audCreadoPor?: string;
  audFechaCreacion?: Date;
  audModificadoPor?: string;
  audFechaModificacion?: Date;
  audEliminadoPor?: string;
  audFechaEliminado?: Date;
  id?: string;
  nombre?: string;
  idCadenaCustodia?: number;
}

export interface DTOPlanMonitoreoRespuesta {
  dataSource?: DTOPlanMonitoreo[];
}

export interface DTOPlanMonitoreoSolicitud {
  idPlanMonitoreo?: number;
  idSubSector?: number;
  codigoAccion?: string;
  ruc?: string;
  unidadFisca?: string;
  tipo?: number;
  unidOrganica?: string;
  coordinacion?: string;
  fechainicio?: Date;
  fechafin?: Date;
  fgsitreg?: string;
}

export interface PlanificacionDTOComponente {
  idRedMonComp?: number;
  componente?: string;
  idComponente?: number;
  idRedMonitoreo?: number;
  checked?: number;
}

export interface DTOComponenteNivel {
  codComponente?: string;
  codProMuestra?: string;
  codProEspecifica?: string;
  codParametro?: string;
  codAna?: string;
}

export interface DTOControlCalidad {
  idRedMonitoreo?: number;
  codigoControl?: string;
  idIesRedMonitoreo?: number;
  respuesta?: number;
  idComponente?: number;
  idCadenaCustodia?: number;
  idTipoControl?: number;
  idTipoBlanco?: number;
  txRespuesta?: string;
  usuario?: string;
  accion?: string;
  tipoMonitoreo?: string;
  txTipoControl?: string;
  fuentePunto?: string;
  nombrePunto?: string;
  componente?: string;
  codSiia?: string;
  esValido?: boolean;
  idEstado?: number;
  codigoAccion?: string;
  origen?: string;
}

export interface DTOFiltro {
  id?: string;
  nombre?: string;
}

export interface DTOFiltros {
  listaTipoEvaluacion?: DTOFiltro[];
  listaUnidadEvaluacion?: DTOFiltro[];
  listaEstado?: DTOFiltro[];
  listaUnidadOrganica?: DTOFiltro[];
  listaCoordinacion?: DTOFiltro[];
  listaSubSector?: DTOFiltro[];
}

export interface DTOIga {
  idInstrumento?: number;
  codigoInstrumento?: string;
  instrumento?: string;
  idAdministrado?: string;
  rucAdministrado?: string;
  idUnidadFiscalizable?: string;
  tipoMonitoreo?: string;
  idPunto?: number;
}

export interface DTOOrdenServicio {
  codigo?: string;
  estado?: string;
  tipo?: string;
  codigoTermino?: string;
  descripcionContrato?: string;
  nroReferencia?: string;
}

export interface DTOOrdenServicioParametros {
  listaParametros?: PlanificacionDTOParametro[];
  usuario?: string;
  idCadenaCustodia?: number;
  codigoAccion?: string;
}

export interface PlanificacionDTOParametro {
  idRedMonPar?: number;
  idParametro?: number;
  parametro?: string;
  idRedMonComp?: number;
  idComponente?: number;
  checked?: boolean;
  checkedInt?: number;
  idCadenaCustodia?: number;
  tipoMonitoreo?: string;
  respuesta?: number;
  cantidad?: number;
  usuario?: string;
  acreditado?: boolean;
  esValido?: boolean;
  codAna?: string;
  codComponente?: string;
  codProMuestra?: string;
  codProEspecifica?: string;
  codParametro?: string;
  observacionParametro?: string;
  estado?: number;
  valECAS?: string;
}

export interface DTOParametroOs {
  codigo?: string;
  componente?: string;
  procedenciaMuestra?: string;
  procedenciaEspecifica?: string;
  parametro?: string;
  cantidad?: number;
}

export interface DTOPlanificacion {
  idAccion?: number;
  codigoAccion?: string;
  idSubsector?: string;
  subSector?: string;
  idAdministrado?: string;
  administrado?: string;
  idUnidadFiscalizable?: string;
  unidadFiscalizable?: string;
  idUnidadOrganica?: string;
  unidadOrganica?: string;
  idCordinacion?: string;
  coordinacion?: string;
  idTipoEvaluacion?: string;
  tipoEvaluacion?: string;
  idUnidadEvaluacion?: string;
  unidadEvaluacion?: string;
  idAreaEstudio?: string;
  areaEstudio?: string;
  txfechaInicio?: string;
  txFechaFin?: string;
  fechasAccion?: string;
  idEstado?: string;
  estado?: string;
  idTipoMonitoreo?: number;
  tipoMonitoreo?: string;
  respuesta?: number;
  usuario?: string;
  idCadenaCustodia?: number;
  idPlanMonitoreo?: number;
  nroExpediente?: string;
  fechaInicio?: Date;
  fechaFin?: Date;
}

export interface DTOPunto {
  idRedMonitoreo?: number;
  idRedMonResul?: number;
  nombrePunto?: string;
  fuentePunto?: string;
  idInstrumento?: string;
  idIesRedMonitoreo?: number;
  respuesta?: number;
  usuario?: string;
  txMotivoEliminacion?: string;
  estado?: string;
  checked?: boolean;
  check?: boolean;
  idPunto?: number;
}

export interface DTORespuestaPlanificado {
  listaComponente?: DTOControlCalidad[];
  listaParametros?: PlanificacionDTOParametro[];
  esValidoCodigoAccion?: boolean;
  esValidoConexion?: boolean;
}

export interface DTOSupervisor {
  idSupervisor?: number;
  dni?: string;
  nombres?: string;
  cargo?: string;
  codigoAccion?: string;
}

export interface DTOBiologicoRespuesta {
  listaClasificacion?: DTOParametroBiologico[];
  txComponente?: string;
}

export interface DTOCoordPtoAdicional {
  idRedMonResulCoord?: number;
  idRedMonResul?: number;
  este?: string;
  norte?: string;
  altitud?: string;
  precision?: string;
  idZona?: string;
  idProyeccion?: string;
  idDatum?: string;
  referencia?: string;
  observaciones?: string;
  usuario?: string;
  respuesta?: number;
}

export interface DTOCoordRespuesta {
  coordenada?: DTOCoordPtoAdicional;
  listaProyeccion?: ParametroDTOParametro[];
  listaDatum?: ParametroDTOParametro[];
  listaZona?: ParametroDTOParametro[];
}

export interface DTOEtapa {
  idEtapa?: number;
  idFrecuenciaMonitoreo?: number;
  idFrecuenciaReporteMulti?: string[];
  idRedMonPar?: number;
  codEtapa?: string;
  codFrecuenciaMonitoreo?: string;
  usuario?: string;
  nombreEtapa?: string;
  isCheked?: boolean;
  listaFrecMonitoreo?: DTOEtapa[];
  listaFrecMonitoreoSelec?: string[];
  listaFrecReporteSelec?: string[];
  idIesParametroMed?: number;
  esParametroAdicional?: boolean;
  listaIds?: string;
  eliminado?: boolean;
  flEtapa?: number;
  resultado?: number;
  txresultado?: string;
  tipoInsert?: string;
  parametroAdicional?: number;
}

export interface DTOParametroBiologico {
  idControlCalAmbPar?: number;
  idParametroJerarquia?: number;
  idParametro?: number;
  idRedMonitoreo?: number;
  nivel?: number;
  idParametroPadre?: number;
  idParametroReino?: number;
  idParametroSubreino?: number;
  idParametroPhyllum?: number;
  idParametroClase?: number;
  idParametroOrden?: number;
  idParametroFamilia?: number;
  idParametroEspecie?: number;
  idComponente?: number;
  nombreParametro?: string;
  opcion?: number;
  usuario?: string;
  idPadre?: number;
  respuesta?: number;
  id?: number;
  txClasificacion?: string;
}

export interface DTOParametroTipoParametro {
  idRedMonitoreo?: number;
  idComponente?: number;
  usuario?: string;
  txListaParametros?: string;
  respuesta?: number;
  parametroAdicional?: number;
  checked?: number;
  listaParametros?: GenericoDTO[];
}

export interface DTOPuntoAdicional {
  idRedMonComponente?: number;
  codigoUfi?: string;
  unidadFiscalizable?: string;
  nombreAdministrado?: string;
  idObligacion?: number;
  idObligacionOrigen?: number;
  idObligacionDestino?: number;
  idPlanMonitoreo?: number;
  codTipoFuente?: string;
  Administrado?: string;
  idSubsector?: string;
  subsector?: string;
  nombreObligacion?: string;
  codigoObligacion?: string;
  idRedMonitoreo?: number;
  codigoPunto?: string;
  nombrePunto?: string;
  localizacion?: string;
  idProyeccion?: string;
  proyeccion?: string;
  idDatum?: string;
  referencia?: string;
  idFuentePunto?: string;
  idTipoPunto?: string;
  idInstitucion?: string;
  tieneCoordenada?: boolean;
  altitud?: string;
  zona?: number;
  idTipoUnidad?: string;
  latitud?: string;
  latitudSigno?: string;
  latitudGrado?: string;
  latitudMinuto?: string;
  latitudSegundo?: string;
  longitud?: string;
  longitudSigno?: string;
  longitudGrado?: string;
  longitudMinuto?: string;
  longitudSegundo?: string;
  observacion?: string;
  puntoAdicional?: boolean;
  usuario?: string;
  AudCreadoPor?: string;
  AudModificadoPor?: string;
  idRedMonFuente?: number;
  idFuente?: number;
  idRedMonCoordenada?: number;
  numeracion?: number;
  id?: string;
  codigo?: string;
  descripcion?: string;
  idInstrumento?: string;
  audFechaCreacion?: Date;
  tienePlanMonitoreo?: boolean;
  estadoRegistro?: boolean;
  numEstadoRegistro?: string;
  tipoMonitoreo?: string;
  coorNorte?: string;
  coorEste?: string;
  txZona?: string;
  cEste?: number;
  cNorte?: number;
  norte?: string;
  este?: string;
  estadoComponente?: number;
  respuesta?: number;
  idFuenteObligacion?: string;
  descripcionObligacion?: string;
  idTipoObligacion?: number;
  txObligacion?: string;
  idCadenaCustodia?: number;
  codigoControl?: string;
  txRespuesta?: string;
  fgAltitud?: number;
  idEstadoCalidad?: string;
  primerRegistro?: number;
  audModificadoPor?: string;
  administrado?: string;
  ceste?: number;
  cnorte?: number;
  audCreadoPor?: string;
  idRedMonCompParam?: number;
  idArchivo?: number;
  uiid?: string;
}

export interface DTOPuntoAdicionalBuilder {
}

export interface DTOPuntoAdicionalReporte {
  idPunto?: number;
  nombrePunto?: string;
  este?: string;
  norte?: string;
  referencia?: string;
  frecuenciaMonitoreo?: string;
  nombreParametro?: string;
  unidadMedida?: string;
  resultado?: string;
  valorComparacion?: string;
  norma?: string;
  nroInformeEnsayo?: string;
  componente?: string;
  horaResultado?: string;
  fechaResultado?: string;
  fechaInicial?: string;
  fechaFinal?: string;
  nombreEquipo?: string;
  observacionPunto?: string;
  observacionParametro?: string;
  esteResultado?: string;
  norteResultado?: string;
  referenciaResultado?: string;
  observacionResultado?: string;
  medioEnvio?: string;
  fechaEmisionEnsayo?: string;
  fechaRecepcionEnsayo?: string;
  limite?: string;
  codProyeccion?: string;
  coordX?: string;
  coordY?: string;
  nuAltitud?: string;
  latitGrados?: string;
  longGrados?: string;
  longMinutos?: string;
  longSegundos?: string;
  latitMinutos?: string;
  latitSegundos?: string;
  idInformeMonitoreo?: number;
  idInstrumento?: number;
  idSubsector?: string;
  codigoUfi?: string;
  nombreUfi?: string;
  rucAdministrado?: string;
  idUfi?: string;
  idAdministrado?: string;
  nombreInformeMonitoreo?: string;
  fechaInicialText?: string;
  fechaFinalText?: string;
  fechaPresentacion?: Date;
  audCreadoPor?: string;
  audFechaCreacion?: Date;
  audModificadoPor?: string;
  audFechaModificacion?: Date;
  usuario?: string;
  nombreInstrumento?: string;
  idFrecuenciaMonitoreo?: number;
  IDFRECUENCIAREPORTE?: string;
  textFrecuenciaMonitoreo?: string;
  nombreAdministrado?: string;
  unidadFiscalizable?: string;
  direccion?: string;
  txObligacion?: string;
  tipoPunto?: string;
  codigoIga?: string;
  subsector?: string;
  etapaRes?: string;
  frecuenciaRes?: string;
  descripcion?: string;
  LATITUDGEOGRAFICA?: string;
  LONGITUDGEOGRAFICA?: string;
  zona?: string;
  codDatum?: string;
}

export interface DTOPuntoAdicionalRespuesta {
  dataSourcePunto?: DTOPuntoAdicional[];
  redMonitoreo?: DTOPuntoAdicional;
  listaUfi?: DTOObligacion[];
  listarIga?: DTOPuntoAdicional[];
  listaObligacion?: DTOObligacion[];
  listaSubsector?: DTOSubsector[];
  listaFuentePunto?: ParametroDTOParametro[];
  listaTipoPunto?: ParametroDTOParametro[];
  listaInstituciones?: ParametroDTOParametro[];
  listaProyeccion?: ParametroDTOParametro[];
  listaDatum?: ParametroDTOParametro[];
  listaZona?: ParametroDTOParametro[];
  listaTipoUnidad?: ParametroDTOParametro[];
  listaComponenteSeleccionado?: ComponenteDTOComponente[];
  listaAdministrado?: DTOObligacion[];
  listaTipoObligacion?: ParametroDTOParametro[];
  idRedMonComponente?: number;
  listaParametrosSeleccionado?: DTOParametroMedicion[];
}

export interface DTOPuntoAdicionalSolicitud {
  rucAdministrado?: string;
  codigoUfi?: string;
  idSubsector?: string;
  idPlanMonitoreo?: number;
  tipoMonitoreo?: string;
  idInformeMonitoreo?: number;
  idLineaBase?: number;
  idFuente?: number;
  filtroIga?: string;
  usuario?: string;
  idObligacion?: string;
  idRedMonitoreo?: number;
  idCadenaCustodia?: number;
  tipoReporte?: string;
  idRedMonResul?: number;
  idRedMonCompParResul?: number;
  idComponente?: number;
  moduloOrigen?: string;
  idRedMonResult?: number;
  idRedMonPar?: number;
  idRedMonCompAmb?: number;
  checked?: boolean;
}

export interface ParametroBiologicoNombreInvalidoException extends Exception {
}

export interface DTORedMonitoreo {
  idRedMonitoreo?: number;
  idPlanMonitoreo?: number;
  idCadenaCustodia?: number;
  idObligacion?: number;
  idLineaBase?: number;
  idSubsector?: string;
  idIesRedMonitoreo?: number;
  idInformeMonitoreo?: number;
  codigoPunto?: string;
  nombrePunto?: string;
  referencia?: string;
  tipopunto?: string;
  fuentePunto?: string;
  proyeccion?: string;
  nombreObligacion?: string;
  codigoObligacion?: string;
  codigoUfi?: string;
  unidadFiscalizable?: string;
  rucAdministrado?: string;
  selected?: boolean;
  usuario?: string;
  componente?: string;
  tipoMonitoreo?: string;
  audCreadoPor?: string;
  audFechaCreacion?: Date;
  tipo?: string;
  idEquipo?: number;
  idInformeEnsayo?: number;
  filtro?: string;
  nombre?: string;
  id?: number;
  codFuenteRedMon?: number;
  zona?: string;
  coorNorte?: string;
  coorEste?: string;
  idRedMonResulCoord?: number;
  tablaPrincipal?: boolean;
  puntoPlanificado?: boolean;
  origenRegistro?: string;
  tipoModulo?: string;
  subModulo?: string;
  datum?: string;
  idFoto?: number;
  respuesta?: number;
  checked?: number;
  tipoResultado?: number;
  valorECAS?: string;
  idsIesRedMonitoreo?: string;
  idRedMonResult?: number;
  esSelecOtroPunto?: number;
}

export interface DTORedMonitoreoRespuesta {
  idIesRedMonitoreo?: number;
  respuesta?: number;
  dataSourcePuntoLista?: DTORedMonitoreo[];
  listaSigno?: ParametroDTOParametro[];
  listaAcreditacion?: ParametroDTOParametro[];
  listaLimite?: ParametroDTOParametro[];
}

export interface DTORedMonitoreoSolicitud {
  rucAdministrado?: string;
  codigoUfi?: string;
  codigoPunto?: string;
  tipoMonitoreo?: string;
  idSubsector?: string;
  idPlanMonitoreo?: number;
  idCadenaCustodia?: number;
  idIesRedMonitoreo?: number;
  idInformeMonitoreo?: number;
  idLineaBase?: number;
  idObligacion?: number;
  codigoObligacion?: string;
  idFuente?: number;
  modulo?: number;
  idComponente?: number;
}

export interface DTORequerimiento {
  idReque?: number;
  nombre?: string;
}

export interface DTOArchivo {
  idArchivo?: number;
  idDocumento?: number;
  nombre?: string;
  uuid?: string;
  uuidAlfresco?: string;
  esPrincipal?: number;
  eliminar?: boolean;
  checked?: boolean;
  origen?: string;
  tipoArchivo?: string;
}

export interface DTOArchivoSiged {
  idTramite?: number;
  idArchivo?: number;
  idArchivoSiged?: number;
  fgArchivoPrincipal?: number;
  response?: number;
  checked?: number;
  idDocumentoSiged?: number;
  idEstadoMostrar?: number;
  usuario?: string;
  nombre?: string;
  uiid?: string;
  idExpediente?: number;
  nroFolios?: number;
  estadoTramiteSiguiente?: number;
  idDocumento?: number;
  nroExpediente?: string;
  tituloSiged?: string;
  estadoTramite?: string;
  idAsunto?: string;
}

export interface DTODestinoCopia {
  idArea?: number;
}

export interface SigedDTODocumento {
  numerodocumento?: string;
  tipodocumento?: number;
  numerofolios?: number;
  esPrincipal?: number;
  idDocumento?: number;
  asunto?: string;
  descripcion?: string;
  archivos?: DTOArchivo[];
}

export interface DTODocumentoCabecera {
  idExpediente?: number;
  idAreaOrigen?: number;
  documentos?: DTODocumentoEnvio[];
}

export interface DTODocumentoEnvio {
  numerodocumento?: string;
  tipodocumento?: number;
  numerofolios?: number;
  esPrincipal?: number;
  asunto?: string;
  descripcion?: string;
  archivos?: DTOArchivo[];
}

export interface DTOHojaTramite {
  estado?: string;
  status?: string;
  mensaje?: string;
  referencia?: string;
  idExpediente?: string;
  numero?: string;
  titulo?: string;
  plazo?: number;
  tipoDias?: number;
  fechaCreacion?: Date;
  horaCtreacion?: Date;
  documentos?: SigedDTODocumento[];
  fechaCreacionExpediente?: string;
  fechaCreacionTramite?: string;
  estadoTramite?: string;
}

export interface DTOPersonaJuridica {
  tipoPersona?: number;
  pjNumeroruc?: string;
  pjRazonsocial?: string;
  pjTipoDocumento?: number;
  pjNumerodocumento?: string;
  pjNombres?: string;
  pjApellidopaterno?: string;
  pjApellidomaterno?: string;
  pcTelefono?: string;
  pcCorreo?: string;
  idAreaOrigen?: number;
  idAreaDestino?: number;
  idProceso?: number;
  plazo?: number;
  idTipodias?: number;
  titulo?: string;
  expedienteOrigen?: string;
  documentos?: SigedDTODocumento[];
  destinoCopia?: DTODestinoCopia[];
}

export interface DTOPersonaNatural {
  tipoPersona?: number;
  pnTipoDocumento?: number;
  pnNumerodocumento?: string;
  pnNombres?: string;
  pnApellidopaterno?: string;
  pnApellidomaterno?: string;
  pcTelefono?: string;
  pcCorreo?: string;
  idAreaOrigen?: number;
  idAreaDestino?: number;
  idProceso?: number;
  plazo?: number;
  idTipodias?: number;
  titulo?: string;
  expedienteOrigen?: string;
  documentos?: SigedDTODocumento[];
  destinoCopia?: DTODestinoCopia[];
}

export interface DTOProceso {
  idProceso?: number;
  cliente?: number;
  creadorResponsable?: number;
  descripcion?: string;
  estado?: string;
  fechaCreacion?: number;
  nombre?: string;
  nombreIntalio?: string;
  plazo?: number;
  tipoConfidencialidad?: string;
  idTipoProceso?: number;
  externo?: number;
  idPersonaRolResponsable?: number;
  esTupa?: string;
  idTipoAmbito?: number;
  idPlazoTipoDias?: number;
}

export interface DTOProcesoCabecera {
  estado?: string;
  mensaje?: string;
  referencia?: string;
  numeroDocumento?: string;
  procesos?: DTOProceso[];
}

export interface DTORegistroRespuesta {
  estado?: string;
  mensaje?: string;
  idExpediente?: number;
  numeroExpediente?: string;
  idDocumento?: number[];
  idArchivo?: number[];
}

export interface DTOUsuarioSiged {
  usuario?: string;
  clave?: string;
  ulrLogin?: string;
  urlConsulta?: string;
  status?: string;
  message?: string;
  token?: string;
}

export interface DTONvalidaUsuario {
  idUsuario?: number;
  idPersona?: number;
  codUsuario?: string;
  nombreUsuario?: string;
  correoElectronico?: string;
  clave?: string;
  idSesion?: number;
  observacion?: string;
}

export interface DTOOpcion {
  PK_eIdOpcion?: number;
  uNombreOpcion?: string;
  FK_eIdAplicacion?: number;
  eIdGrupoOpcion?: number;
  eIdSesionIngresa?: number;
  eNroOrden?: number;
  cEsVisible?: boolean;
  cFlgActivo?: boolean;
}

export interface DTORuc {
  ruc?: string;
  razonSocial?: string;
  idUsuario?: number;
  idEmpresa?: number;
}

export interface DTOSso {
  tokenSesion?: string;
  idUsuario?: string;
  usuarioWindows?: string;
  nombreCompleto?: string;
  opciones?: string;
  perfil?: string;
  idPersona?: number;
  codUsuario?: string;
  correo?: string;
  observacion?: string;
  ruc?: string;
}

export interface DTOSsoRespuesta {
  estado?: boolean;
  mensaje?: string;
  listaSso?: DTOSso[];
  listaRuc?: DTORuc[];
  usuario?: DTONvalidaUsuario;
  usuarioRuc?: DTOUsuarioRuc[];
  sso?: DTOSso;
  opciones?: string;
  IdAdministrador?: string;
  IdSupervisor?: string;
  IdUsuarioPrincipal?: string;
  IdUsuarioSecundario?: string;
}

export interface DTOSsoSolicitud {
  usuario?: string;
  tipoDocumento?: string;
  nroDocumento?: string;
  clave?: string;
  idUsuario?: string;
  ruc?: string;
}

export interface DTOUsuarioRuc {
  ruc?: string;
  NroDocumento?: string;
  idUsuario?: number;
  idEmpresa?: number;
  razonsocial?: string;
  NombreCompleto?: string;
  nombreUsuario?: string;
  correoElectronico?: string;
  codUsuario?: string;
}

export interface DTOSubsector {
  id?: string;
  nombre?: string;
}

export interface DTOTaxonomia {
  idTaxonomia?: number;
  nivel?: number;
  id?: number;
  idComponente?: number;
  txClasificacion?: string;
  txTaxonomia?: string;
  usuario?: string;
  txRecorridoClasificacion?: string;
  estadoEliminar?: number;
  respuesta?: number;
  parametroAdicional?: number;
  checked?: boolean;
  taxonomiaIds?: string;
}

export interface DTOTaxonomiaParametro {
  id?: number;
  idControlCalAmbPar?: number;
  parametroAdicional?: number;
  listTaxonomias?: string[];
  txListTaxonomias?: string;
  checked?: number;
  tipoMonitoreo?: string;
  respuesta?: number;
  idRedMonResult?: number;
  parametroAdicionalBiota?: number;
  usuario?: string;
  idParametro?: number;
  txParametro?: string;
  listaParamametros?: GenericoDTO[];
}

export interface DTOTaxonomiaRespuesta {
  listTaxonomias?: DTOTaxonomia[];
  listParametros?: DTOTaxonomiaParametro[];
}

export interface Throwable extends Serializable {
  cause?: Throwable;
  stackTrace?: StackTraceElement[];
  message?: string;
  suppressed?: Throwable[];
  localizedMessage?: string;
}

export interface StackTraceElement extends Serializable {
  classLoaderName?: string;
  moduleName?: string;
  moduleVersion?: string;
  methodName?: string;
  fileName?: string;
  lineNumber?: number;
  nativeMethod?: boolean;
  className?: string;
}

export interface Exception extends Throwable {
}

export interface Serializable {
}
