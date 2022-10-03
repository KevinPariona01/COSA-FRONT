
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ArchivoService } from '../service/archivo.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
/* import { logging } from 'selenium-webdriver';
import { escapeRegExp } from '@angular/compiler/src/util';
import { threadId } from 'worker_threads'; */

@Component({
  selector: 'app-archivo',
  templateUrl: './archivo.component.html',
  styleUrls: ['./archivo.component.css']
})
export class ArchivoComponent implements OnInit {
  @Input() parameter: any; //objeto para resibir datos del componente padre
  @Output() data: EventEmitter<any> = new EventEmitter(); //evento para pasar datos al componente padre
  @Output() endChange: EventEmitter<any> = new EventEmitter(); //evento para disparar una acción al terminar de guardar el archivo
  @Output() estadoBtn: EventEmitter<any> = new EventEmitter();
  @ViewChild('ejDialogLoading') ejDialogLoading: DialogComponent;
  @ViewChild('formReg') myFormRegister: ElementRef;
  @ViewChild('formUpload') myFormUpload: ElementRef;
  @ViewChild('simpleInput') myFileInput: ElementRef;
  @ViewChild('iframeUpload') myIframeUpload: ElementRef;
  txModal: String = "Cargando Fotografía";


  // DIALOG
  mensajeDialog: string = "";
  tipoDialog: string = "";
  imagenDialog = 'assets/images/xs-msg-box/msg_info.png';
  dataDialog: any = { accion: "", data: {} };
  @ViewChild('dialogMesage') dialogMesage: DialogComponent;

  progressText: string;
  progress = false;
  archivo: any = {};
  urlIframe: string;
  hkey = '';
  tiket = '';
  accept = '';
  selectArchivo: boolean;
  count = -1;
  btnClass = 'adj__input';

  btnDisabled = true;
  existeArchivo: boolean = false;

  esFoto: boolean = false;
  tituloToolTipEliminar: string = 'Eliminar Archivo';

  acceptText: string = '';

  cantidadFolios: number = 0;

  disabledSelecArchivo: boolean = false;

  constructor(
    public archivoService: ArchivoService,
    public sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {

    let tipoArchivo = this.parameter?.tipoArchivo || '';

    if (tipoArchivo == 'FOTO') {
      this.esFoto = true;
      this.accept = "video/*,image/*";
      this.acceptText = "JPG, PNG, MP4";
      this.tituloToolTipEliminar = 'Eliminar Foto';
      this.btnClass = 'adj__foto';
    } else {

      if (this.parameter.tipo == 'EQUIPO' && this.parameter.tipoMonitoreo == 'IMA') {
        this.btnClass = 'adj__input2';
      }

      if (this.parameter.tipo != 'ENVIO_SIGED' && this.parameter.tipoArchivo != 'EXCEL') {
        this.parameter.formato.push('.zip');
        this.parameter.formato.push('.rar');
      }

      for (let i = 0; i < this.parameter.formato.length; i++) {
        if (i < this.parameter.formato.length - 1)
          this.acceptText += this.parameter.formato[i] + ',';
        else if (i == this.parameter.formato.length - 1)
          this.acceptText += this.parameter.formato[i];
      }
    }

  }


  uploadFile(event) {

    let formato = '';
    for (let file of event.target.files) {
      this.archivo.nombreArchivo = file.name;
      const fileSizeMB = Math.round(file.size / (1024 * 1024));

      //const fileSizeMB = file.size / (1024 * 5120);

      if (this.esFoto) {
        if (fileSizeMB > 2048) {
          this.mostrarMensajeDialog('El tamaño máximo es de 2 GB. revisa el tamaño de la foto o videos que intenta cargar.');
          this.myFileInput.nativeElement.value = '';
          return;
        }

      } else {
        if (fileSizeMB > 5120) {
          this.mostrarMensajeDialog('El tamaño máximo es de 5 GB. revisa el tamaño de los archivos que intenta cargar.');
          this.myFileInput.nativeElement.value = '';
          return;
        }
      }

      if (!this.validarFormato(file)) {
        this.mostrarMensajeDialog('Los formatos permitidos son ' + this.acceptText + ', revisa el formato del archivo que intenta cargar');
        this.myFileInput.nativeElement.value = '';
        return;
      }
      let fileSize;
      if (fileSizeMB <= 0) {
        fileSize = Math.round(file.size / 1024) + ' KB';
      } else {
        fileSize = fileSizeMB + 'MB';
      }
      formato = file.name;
    }

    this.disabledSelecArchivo = true;
    this.selectArchivo = true;

    let params = {
      opcion: 'AGREGAR',
      pathAlfresco: this.parameter.pathAlfresco,
      tipoArchivo: 'DOCUMENTO',
      nombreArchivo: this.archivo.nombreArchivo
    }

    this.progress = true;
    this.estadoBtn.emit(true);
    this.progressText = 'Cargando Archivo...';
    this.cantidadPaginasPdf(event, formato, params);

    /*     this.archivoService.agregarAlfresco(params).then((res) => {
          if (res.estado == null) {
            this.mostrarMensajeDialog('El servicio para adjuntar el archivo no está disponible');
            this.progress = false;
            return;
          }
          if (res.estado) {
            this.archivo.idArchivo = res.idArchivo;
            this.urlIframe = res.formActionURL;
            this.hkey = res.keyh;
            this.parameter.nombreArchivo = this.archivo.nombreArchivo;
            this.archivo.selectArchivo = this.selectArchivo;
            this.archivo.file = event;
            this.archivo.cantidadFolios = this.cantidadFolios;
            this.data.emit(this.archivo);
          }
          this.progress = false;
          this.estadoBtn.emit(false);
        }); */

  }

  iframeURL(url) {
    console.log('iframeURL',url);    
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  iframeLoaded() {

    this.count++;
    if (this.count > 0) {
      this.progress = false;
      this.parameter.nombreArchivo = '';
      this.myFileInput.nativeElement.value = '';
      this.endChange.emit();
    }

    this.disabledSelecArchivo = false;
  }

  subirArchivo() {
    this.disabledSelecArchivo = true;
    if (this.selectArchivo) {
      this.progress = true;
      this.progressText = 'Enviando archivo al repositorio...';
      console.log(this.myFormUpload.nativeElement);
      
     this.myFormUpload.nativeElement.appendChild(
        this.myFormRegister.nativeElement.querySelector('input[type=file]')
      );
      this.myFormUpload.nativeElement.submit();
    }
  }

  downloadFile() {
    console.log("Descarga archivo");
    console.log(this.parameter);    
    /* this.archivoService.obtenerUrlDescarga({ uiid: this.parameter.uiid }).then(res => {
      if (res.estado) {
        let url;
        url = res.fullUrlDownload;
        window.open(url, '_blank');
      }
    }); */
  }

  obtenerUrlArchivo(uiid) {
    return this.archivoService.obtenerUrlDescarga({ uiid }).then(
      this.mostarModalLoading()
    ).finally(() =>
    this.HideModalLoading())

  }

  validarFormato(file: { name: string; }) {
    let extension = file.name.slice((Math.max(0, file.name.lastIndexOf(".")) || Infinity) + 1);
    extension = "."+extension;
    if (this.esFoto) {
      let f = ['.png', '.jpg','.mp4'];
      return f.map(s => s.toUpperCase()).includes(extension.toUpperCase())
    } else {
      return this.parameter.formato.map(s => s.toUpperCase()).includes(extension.toUpperCase())
    }
    /*   if (this.esFoto) {
        if (file.name.toLowerCase().includes('.png') || file.name.toLowerCase().includes('.jpg')) {
          return true;
        }
      } else {

        if (file.name.toLowerCase().includes('.pdf')) {
          return true;
        }
        if (file.name.toLowerCase().includes('.docx')) {
          return true;
        }
        if (file.name.toLowerCase().includes('.doc')) {
          return true;
        }
        if (file.name.toLowerCase().includes('.zip')) {
          return true;
        }
        if (file.name.toLowerCase().includes('.rar')) {
          return true;
        }
        if (file.name.toLowerCase().includes('.png')) {
          return true;
        }

        if (file.name.toLowerCase().includes('.xlsx')) {
          return true;
        }
        return file.name.toLowerCase().includes('.jpg');
      } */

  }

  aceptarDialog() {
    switch (this.tipoDialog) {

      case 'QUITAR_ARCHIVO':
        this.archivo.idArchivo = null;
        this.urlIframe = null;
        this.hkey = null;
        this.parameter.nombreArchivo = null;
        this.archivo.selectArchivo = null;
        //this.data.emit(this.archivo);
        //this.parameter.uiid = null;

        this.data.emit({ idArchivo: 0 });

        this.myFileInput.nativeElement.value = "";
        this.selectArchivo = false;
        this.existeArchivo = false;
        this.parameter.uiid = null;
        //this.data.emit(null);
        break;
      default:
        this.dialogMesage.hide();
        break;
    }
    this.dialogMesage.hide();
  }
  cancelarDialog() {
    this.dialogMesage.hide();
  }

  mostarModalLoading(texto: string = "Cargando Fotografía") {
    this.txModal = texto;
    this.ejDialogLoading.show();
  }
  HideModalLoading() {
    this.ejDialogLoading.hide();
  }
  mostrarMensajeDialog(mensaje) {
    this.imagenDialog = 'assets/images/xs-msg-box/msg_info.png';
    this.mensajeDialog = mensaje;
    this.dialogMesage.show();
  }

  onClickQuitarArchivo() {

    if (!this.disabledSelecArchivo) {
      this.imagenDialog = 'assets/images/xs-msg-box/msg_info.png';
      this.mensajeDialog = '¿Está seguro que desea quitar el archivo?';
      this.tipoDialog = 'QUITAR_ARCHIVO'
      this.dialogMesage.show();
    }
  }

  cantidadPaginasPdf(file, formato: string, params) {
    
    if (formato.includes(".pdf")) {
      let fileReader: any = new FileReader();
      fileReader.readAsBinaryString(file.target.files[0]);
      fileReader.onloadend = () => {
        this.cantidadFolios = fileReader.result?.match(/\/Type\s*\/Page[^s]/g).length || 0;
        if (this.cantidadFolios == 0) {
          this.progress = false;
          this.estadoBtn.emit(false);
          this.progressText = '';
          this.mostrarMensajeDialog('El pdf está dañado.');
          return;
        }
      }
    } else if (formato.includes(".xlsx")) {
      this.cantidadFolios = 1;

    }

    params.nroFolios = this.cantidadFolios;

    this.archivoService.agregarAlfresco(params).then((res) => {
      if (res.estado == null) {
        this.mostrarMensajeDialog('El servicio para adjuntar el archivo no está disponible');
        this.progress = false;
        this.myFileInput.nativeElement.value = '';
        return;
      }
      if (res.estado) {
        this.archivo.idArchivo = res.idArchivo;
        this.urlIframe = res.formActionURL;
        this.hkey = res.keyh;
        this.parameter.nombreArchivo = this.archivo.nombreArchivo;
        this.archivo.selectArchivo = this.selectArchivo;
        this.archivo.file = file;
        this.data.emit(this.archivo);
      }
      this.progress = false;
      this.estadoBtn.emit(false);
    }).finally(() => { this.disabledSelecArchivo = false })
  }
}


