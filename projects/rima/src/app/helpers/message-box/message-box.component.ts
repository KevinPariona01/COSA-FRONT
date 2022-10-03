import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css'],
})
export class MessageBoxComponent implements OnInit {
  @Input() ancho: String = '';
  @ViewChild('dlgMessageBox') dlgMessageBox: DialogComponent;

  messageBoxTitulo: String = '';
  messageBoxMensaje: String = '';
  messageBoxImagen: String = 'assets/images/xs-msg-box/msg_info.png';
  messageBoxWidth: String = '';
  messageBoxSimpleButton: boolean = false;
  messageBoxCallbackAceptar: any;
  messageBoxCallbackCancelar: any;

  constructor() {}

  ngOnInit(): void {}

  mostrar(configMensaje: {
    titulo: String;
    mensaje: String;
    tipoMensaje: String;
    ancho: String;
    onClickAceptar: any;
    onClickCancelar: any;
    simple?: boolean;
  }) {
    this.messageBoxTitulo = configMensaje.titulo;
    this.messageBoxMensaje = configMensaje.mensaje;
    this.messageBoxWidth = configMensaje.ancho;
    this.messageBoxSimpleButton = configMensaje.simple;
    this.messageBoxCallbackAceptar = configMensaje.onClickAceptar;
    this.messageBoxCallbackCancelar = configMensaje.onClickCancelar;
    this.setImagen(configMensaje.tipoMensaje);
    this.dlgMessageBox.show();
  }

  onAceptarClick() {
    //this.onRespuesta.emit('ACEPTAR');
    if (this.messageBoxCallbackAceptar) this.messageBoxCallbackAceptar();
    this.dlgMessageBox.hide();
  }

  onCancelarClick() {
    if (this.messageBoxCallbackAceptar) this.messageBoxCallbackCancelar();
    this.dlgMessageBox.hide();
  }

  setImagen(tipoMensaje) {
    switch (tipoMensaje) {
      case 'INFORMACION':
        this.messageBoxImagen = 'assets/images/xs-msg-box/msg_info.png';
        break;
      case 'PRECAUCION':
        this.messageBoxImagen = 'assets/images/xs-msg-box/msg_info.png';
        break;
      case 'ERROR':
        this.messageBoxImagen = 'assets/images/xs-msg-box/msg_info.png';
        break;
      case 'PREGUNTA':
        this.messageBoxImagen = 'assets/images/xs-msg-box/msg_info.png';
        break;
      default:
        // TODO
        break;
    }
  }
}
