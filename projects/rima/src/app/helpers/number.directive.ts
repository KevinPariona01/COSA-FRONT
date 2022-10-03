import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[number]'
})
export class NumberDirective {

  private regex = "^[0-9]*$";

  constructor(private elementRef: ElementRef) { }

  @HostListener("keypress", ["$event"])
  onKeyPress(event) {
    return new RegExp(this.regex).test(event.key);
  }

  @HostListener('paste', ['$event']) 
  blockPaste(e: KeyboardEvent) {
    this.validateFields(e);
  }

  validateFields(event) {
    setTimeout(() => {
      this.elementRef.nativeElement.value = this.elementRef.nativeElement.value.replace(/[^0-9]/g, "").replace(/\s/g, "");
      event.preventDefault();
    }, 100);
  }
}
