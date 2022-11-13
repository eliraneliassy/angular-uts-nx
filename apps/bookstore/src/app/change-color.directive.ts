import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[changeColor]'
})
export class ChangeColorDirective implements AfterViewInit {


  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.renderer
      .setStyle(this.element.nativeElement, 'background-color', 'yellow');
  }
}