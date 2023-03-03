import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDiretivas]'
})
export class DiretivasDirective {
  
  constructor(private el: ElementRef) {
    this.el.nativeElement.style = "font-size: 3rem; background-color: #111111; color: aliceblue;"
    
    this.el.nativeElement.classList.add('Title')
   }

}
