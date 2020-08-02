import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBorderStyle]'
})
export class BorderBoldDirective {
  @Input('appBorderStyle') status: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    switch (this.status) {
      case 'available':
        this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid #009688');
        break;
      case 'sold':
        this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2.5px solid #F85959');
        break;
      case 'loaned out':
        this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid #9b59b6');
        break;
    }
  }
}

