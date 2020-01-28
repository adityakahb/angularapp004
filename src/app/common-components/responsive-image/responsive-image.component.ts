import { Component, Input, ChangeDetectorRef, AfterViewChecked } from '@angular/core';

const imgArr = ['xs', 'xs2', 'sm', 'sm2', 'md', 'md2', 'lg', 'lg2', 'xl', 'xl2'];
let index = 0;

@Component({
  selector: 'app-responsive-image',
  templateUrl: './responsive-image.component.html',
  styleUrls: ['./responsive-image.component.scss']
})
export class ResponsiveImageComponent implements AfterViewChecked {

  private _bannerData;
  private _cbp;
  private currentImg;

  @Input()
  set cbp(val: any) {
    this._cbp = val;
  };

  @Input()
  set bannerData(bannerData: any) {
    this._bannerData = bannerData;
  }

  get bannerData(): any { return this._bannerData; }
  
  constructor(private cdRef:ChangeDetectorRef) {
  }

  ngAfterViewChecked() {
    if ((this._bannerData || {}).img) {
      index = imgArr.indexOf(this._cbp);
      while (index >= 0) {
        if (this._bannerData.img[imgArr[index]]) {
          this.currentImg = this._bannerData.img[imgArr[index]];
          break;
        }
        index--;
      }
    }
    this.cdRef.detectChanges();
  }
}
