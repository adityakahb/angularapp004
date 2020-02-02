import { Component, Input, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { ResponsiveBreakpointService } from './../../services/responsive-breakpoint.service';

const imgArr = ['xs', 'xs2', 'sm', 'sm2', 'md', 'md2', 'lg', 'lg2', 'xl', 'xl2'];
let index = 0;

@Component({
  selector: 'app-responsive-image',
  templateUrl: './responsive-image.component.html',
  styleUrls: ['./responsive-image.component.scss']
})
export class ResponsiveImageComponent implements AfterViewChecked {

  private _imgData;
  private _cbp;
  private currentImg;
  private _stretch = false;

  constructor(private cdRef:ChangeDetectorRef, private bpService: ResponsiveBreakpointService) {}

  /* @Input()
  set cbp(val: any) {
    this._cbp = val;
  }; */

  @Input()
  set imgData (imgData: any) {
    this._imgData = imgData;
  }

  @Input()
  set stretch (value: any) {
    this._stretch = value || false;
  }

  get imgData (): any { return this._imgData; }
  get stretch (): any { return this._stretch; }

  ngAfterViewChecked() {
    this._cbp = this.bpService.getCBP();
    if (this._imgData) {
      index = imgArr.indexOf(this._cbp);
      while (index >= 0) {
        if (this.imgData[imgArr[index]]) {
          this.currentImg = this._imgData[imgArr[index]];
          break;
        }
        index--;
      }
    }
    this.cdRef.detectChanges();
  }
}
