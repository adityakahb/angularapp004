import { Directive, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

let dpr = 0;

@Directive({
  selector: '[appResponsiveBreakpoint]'
})
export class ResponsiveBreakpointDirective {
  @Output() triggerBreakpointChange = new EventEmitter();
  currentBreakpoint = '';
  constructor(public breakpointObserver: BreakpointObserver, private window: Window) {
    if (window && window.devicePixelRatio) {
      dpr = window.devicePixelRatio;
    }
  }
  ngAfterViewInit(): void {
    this.breakpointObserver.observe([
      '(min-width: 576px)',
      '(min-width: 768px)',
      '(min-width: 992px)',
      '(min-width: 1200px)'])
    .subscribe((state: BreakpointState) => {
      this.currentBreakpoint = 'xs';
      if (state.breakpoints['(min-width: 576px)']) {
        this.currentBreakpoint = 'sm';
      }
      if (state.breakpoints['(min-width: 768px)']) {
        this.currentBreakpoint = 'md';
      }
      if (state.breakpoints['(min-width: 1024px)']) {
        this.currentBreakpoint = 'lg';
      }
      if (state.breakpoints['(min-width: 1200px)']) {
        this.currentBreakpoint = 'xl';
      }
      setTimeout(() => {
        this.triggerBreakpointChange.emit(this.currentBreakpoint + (dpr > 1 ? '2' : ''));
      }, 0);
    });
  }
}
