import { ElementRef, Directive, Input, Output, AfterViewInit } from '@angular/core';

let dpr = 0;
@Directive({
  selector: '[appResponsiveImage]'
})
export class ResponsiveImageDirective implements AfterViewInit {
  @Input('src') xs: any;
  @Input('src2') xs2: any;
  @Input('sm') sm: any;
  @Input('sm2') sm2: any;
  @Input('md') md: any;
  @Input('md2') md2: any;
  @Input('lg') lg: any;
  @Input('lg2') lg2: any;
  @Input('xl') xl: any;
  @Input('xl2') xl2: any;
  
  @Output() currentBreakpoint = 'xs';

  elem: ElementRef;

  constructor(elem: ElementRef, private window: Window) {
    this.elem = elem;
    /* let imgArr: string[] = [];
    let count = 0;
    let rightImg = '';
    if ((this.xs2 || '').length > 0 && dpr > 1) {
      imgArr.push(this.xs2);
    }
    if ((this.xs || '').length > 0 && dpr <= 1) {
      imgArr.push(this.xs);
    }
     */
  }

  ngAfterViewInit(): void {
    /* if (window && window.devicePixelRatio) {
          dpr = window.devicePixelRatio;
        }
        let imgArr: string[] = [];
        let count = 0;
        let rightImg = '';
        this.currentBreakpoint = 'xs';
        if ((this.xs2 || '').length > 0 && dpr > 1) {
          imgArr.push(this.xs2);  
        }
        else if ((this.xs || '').length > 0) {
          imgArr.push(this.xs);  
        }
        if (state.breakpoints['(min-width: 576px)']) {
          this.currentBreakpoint = 'sm';
          if ((this.sm2 || '').length > 0 && dpr > 1) {
            imgArr.push(this.sm2);  
          }
          else if ((this.sm || '').length > 0) {
            imgArr.push(this.sm);  
          }
        }
        if (state.breakpoints['(min-width: 768px)']) {
          this.currentBreakpoint = 'md';
          if ((this.md2 || '').length > 0 && dpr > 1) {
            imgArr.push(this.md2);  
          }
          else if ((this.md || '').length > 0) {
            imgArr.push(this.md);  
          }
        }
        if (state.breakpoints['(min-width: 992px)']) {
          this.currentBreakpoint = 'lg';
          if ((this.lg2 || '').length > 0 && dpr > 1) {
            imgArr.push(this.lg2);  
          }
          else if ((this.lg || '').length > 0) {
            imgArr.push(this.lg);  
          }
        }
        if (state.breakpoints['(min-width: 1200px)']) {
          this.currentBreakpoint = 'xl';
          if ((this.xl2 || '').length > 0 && dpr > 1) {
            imgArr.push(this.xl2);  
          }
          else if ((this.xl || '').length > 0) {
            imgArr.push(this.xl);  
          }
        }
        count = imgArr.length - 1;
        while(count >= 0) {
          if (imgArr[count].length > 0) {
            rightImg = imgArr[count];
            break;
          }
          count--;
        }
        this.elem.nativeElement.src = rightImg;
        */
  }
}
