import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPhoneNumberFormat]'
})
export class PhoneNumberFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() { 
    // 0698925567 => (+212)698-925567
    let phone: string = this.el.nativeElement.value;
    phone = phone.slice(0, 4) + '-' + phone.slice(4);
    this.el.nativeElement.value = phone.replace('0', '(+212)');
    
  }
}
