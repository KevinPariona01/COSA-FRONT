import {Directive, ElementRef, HostListener, Input, isDevMode} from '@angular/core';

/**
 * Directiva que filtra y hace que solo se puedan ingresar numeros decimales,
 *
 * Configuración:
 *
 * Permitir decimales `[permitirDecimales]` *Default: true*
 *
 * Permitir el signo negativo `[permitirSigno]` *Default: false*
 *
 * Inspirado de https://stackoverflow.com/a/51866181/8298562
 */
@Directive({ selector: '[SoloNumeros]' })
export class SoloNumerosDirective {

  @Input() permitirDecimales: boolean = true;
  @Input() permitirSigno: boolean = false;
  @Input() separadorDecimal: string = '.';

  previousValue: string = '';

  // --------------------------------------
  //  Regular expressions
  integerUnsigned: RegExp = /^\d*$/;
  integerSigned: RegExp = /^-?\d+$/;
  decimalUnsigned: RegExp = /^\d+(.\d+)?$/;
  decimalSigned: RegExp = /^-?\d+(.\d+)?$/;

  /**
   * Constructor de la clase
   * @param hostElement
   */
  constructor(private hostElement: ElementRef) {
  }

  /**
   * Controlador de eventos para cuando se cambia
   * @param e
   */
  @HostListener('change', ['$event']) onChange(e) {
    this.validateValue(this.hostElement.nativeElement.value);
  }

  /**
   * Controlador de eventos para cuando se pega
   * @param e
   */
  @HostListener('paste', ['$event']) onPaste(e) {

    // get and validate data from clipboard
    if (isDevMode()){
      console.log("Se ha realizado un copiado y pegado");
    }
    let value = e.clipboardData.getData('text/plain');
    this.validateValue(value);
    e.preventDefault();
  }

  /**
   * Controlador de eventos para cuando presionan una tecla
   * @param e
   */
  @HostListener('keydown', ['$event']) onKeyDown(e: KeyboardEvent) {
    let cursorPosition: number = e.target['selectionStart'];
    let originalValue: string = e.target['value'];
    let key: string = this.getName(e);
    let controlOrCommand = (e.ctrlKey === true || e.metaKey === true);
    let signExists = originalValue.includes('-');
    let separatorExists = originalValue.includes(this.separadorDecimal);

    // allowed keys apart from numeric characters
    let allowedKeys = [
      'Backspace', 'ArrowLeft', 'ArrowRight', 'Escape', 'Tab'
    ];

    // when decimals are allowed, add
    // decimal separator to allowed codes when
    // its position is not close to the the sign (-. and .-)
    let separatorIsCloseToSign = (signExists && cursorPosition <= 1);
    if (this.permitirDecimales && !separatorIsCloseToSign && !separatorExists) {

      if (this.separadorDecimal == '.')
        allowedKeys.push('.');
      else
        allowedKeys.push(',');
    }

    // when minus sign is allowed, add its
    // key to allowed key only when the
    // cursor is in the first position, and
    // first character is different from
    // decimal separator
    let firstCharacterIsSeparator = (originalValue.charAt(0) != this.separadorDecimal);
    if (this.permitirSigno && !signExists &&
      firstCharacterIsSeparator && cursorPosition == 0) {

      allowedKeys.push('-');
    }

    // allow some non-numeric characters
    if (allowedKeys.indexOf(key) != -1 ||
      // Allow: Ctrl+A and Command+A
      (key == 'a' && controlOrCommand) ||
      // Allow: Ctrl+C and Command+C
      (key == 'c' && controlOrCommand) ||
      // Allow: Ctrl+V and Command+V
      (key == 'v' && controlOrCommand) ||
      // Allow: Ctrl+X and Command+X
      (key == 'x' && controlOrCommand)) {
      // let it happen, don't do anything
      return;
    }

    // save value before keydown event
    this.previousValue = originalValue;

    // allow number characters only
    let isNumber = this.integerUnsigned.test(key);
    if (isNumber) return; else e.preventDefault();
  }

  /**
   * Verificar si un numero es valido o no
   * @param value
   */
  validateValue(value: string): void {

    // elegir la expresión regular correcta
    let regex: RegExp;
    if (!this.permitirDecimales && !this.permitirSigno) regex = this.integerUnsigned;
    if (!this.permitirDecimales && this.permitirSigno) regex = this.integerSigned;
    if (this.permitirDecimales && !this.permitirSigno) regex = this.decimalUnsigned;
    if (this.permitirDecimales && this.permitirSigno) regex = this.decimalSigned;

    // Cuando un numero empieza con un separador de decimales,
    // arreglarlo añadiendo un cero al inicio
    let firstCharacter = value.charAt(0);
    if (firstCharacter == this.separadorDecimal)
      value = 0 + value;

    // cuando un numero termina con separador decimal,
    // arreglarlo añadiendo un cero al final
    let lastCharacter = value.charAt(value.length - 1);
    if (lastCharacter == this.separadorDecimal)
      value = value + 0;

    // probar el numero con la expresión regular, cuando el numero es invalido reemplazarlo con un cero
    let valid: boolean = regex.test(value);
    this.hostElement.nativeElement['value'] = valid ? value : 0;
  }

  /**
   * Get key's name
   * @param e
   */
  getName(e: KeyboardEvent): string {

    if (e.key) {
      return e.key;
    } else {
      // for old browsers
      if (e.keyCode && String.fromCharCode) {
        switch (e.keyCode) {
          case   8:
            return 'Backspace';
          case   9:
            return 'Tab';
          case  27:
            return 'Escape';
          case  37:
            return 'ArrowLeft';
          case  39:
            return 'ArrowRight';
          case 188:
            return ',';
          case 190:
            return '.';
          case 109:
            return '-'; // minus in numbpad
          case 173:
            return '-'; // minus in alphabet keyboard in firefox
          case 189:
            return '-'; // minus in alphabet keyboard in chrome
          default:
            return String.fromCharCode(e.keyCode);
        }
      }
    }
  }
}
