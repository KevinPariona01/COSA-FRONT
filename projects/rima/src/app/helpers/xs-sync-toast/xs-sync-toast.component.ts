import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  HostListener,
} from '@angular/core';
import {
  ToastComponent,
  ToastCloseArgs,
  ToastPositionModel,
} from '@syncfusion/ej2-angular-notifications';

@Component({
  selector: 'xs-sync-toast',
  templateUrl: './xs-sync-toast.component.html',
  styleUrls: ['./xs-sync-toast.component.css'],
})
export class XsSyncToastComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // -- TOAST
  @ViewChild('defaultToast')
  public toastObj: ToastComponent;

  // X: Left, Center, Right
  // Y: Top, Center, Bottom
  public position: ToastPositionModel = { X: 'Right', Y: 'Top' };

  public onCreate = (): void => {
    // setTimeout((): void => {
    //     this.toastObj.show();
    // }, 200);
  };

  public onClose = (e: ToastCloseArgs): void => {
    if (e.toastContainer.childElementCount === 0) {
    }
  };

  public onBeforeOpen = (): void => {};

  /**
   *
   * @param content string
   * @param tipo string : 'success' | 'warning' | 'danger' | 'info'
   * @param showIcon boolean
   */
  public showToast = (
    content: string,
    tipo: string = 'info',
    showIcon: boolean = true
  ): void => {
    let cssClass = '';
    let icon = '';
    let title = '';

    switch (tipo) {
      case 'danger':
        cssClass = 'e-toast-danger';
        icon = 'e-danger toast-icons';
        title = 'Error';
        break;
      case 'warning':
        cssClass = 'e-toast-warning';
        icon = 'e-warning toast-icons';
        title = 'Cuidado';
        break;
      case 'info':
        cssClass = 'e-toast-info';
        icon = 'e-info toast-icons';
        title = 'Información';
        break;
      case 'success':
        cssClass = 'e-toast-success';
        icon = 'e-success toast-icons';
        title = 'Correcto';
        break;
      default:
        cssClass = 'e-toast-info';
        icon = 'e-info toast-icons';
        title = 'Información';
        break;
    }

    if (showIcon) {
      this.toastObj.show({ title, content, cssClass, icon });
    } else {
      this.toastObj.show({ title, content, cssClass });
    }
  };

  public hideToast = (): void => {
    this.toastObj.hide('All');
  };
  // -- END TOAST
}
