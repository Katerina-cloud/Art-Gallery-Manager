import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appStatusStyle]'
})
export class StatusStyleDirective {
  @Input('appStatusStyle') status: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    switch (this.status) {
      case 'available':
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#009688');
        break;
      case 'sold':
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#F85959');
        break;
      case 'loaned out':
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#9b59b6');
        break;
    }
  }


}
