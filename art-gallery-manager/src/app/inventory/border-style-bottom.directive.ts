import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBorderBottomStyle]'
})
export class BorderBottomDirective {
  @Input('appBorderBottomStyle') status: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    switch (this.status) {
      case 'available':
        this.renderer.setStyle(this.elementRef.nativeElement, 'border-bottom', '1px solid #009688');
        break;
      case 'sold':
        this.renderer.setStyle(this.elementRef.nativeElement, 'border-bottom', '1px solid #F85959');
        break;
      case 'loaned out':
        this.renderer.setStyle(this.elementRef.nativeElement, 'border-bottom', '1px solid #9b59b6');
        break;
    }
  }
}

