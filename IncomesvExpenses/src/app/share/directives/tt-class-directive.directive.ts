import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTtClassDirective]'
})
export class TtClassDirectiveDirective {
  @Input() appTtClassDirective: string = 'info';
  
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, "background-color", "#f1f2f6");
  }
}
