import { Directive,ElementRef,Renderer2,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMouseHover]'
})
export class MouseHoverDirective {


  constructor(private el:ElementRef,private renderer:Renderer2) { 
    this.renderer.setStyle(this.el.nativeElement,'cursor','pointer');
  }

  @HostListener('mouseenter') onHover(){
    this.renderer.setStyle(this.el.nativeElement,'background-color','#5F9EA0');
    // this.renderer.setAttribute(this.el.nativeElement,'class','sample');
    // this.renderer.setAttribute(this.el.nativeElement,'class','sample2');
    // this.renderer.addClass(this.el.nativeElement,'sample2');
  }

  @HostListener('mouseleave') onNoHover(){
    this.renderer.setStyle(this.el.nativeElement,'background-color','transparent');

  }
}
