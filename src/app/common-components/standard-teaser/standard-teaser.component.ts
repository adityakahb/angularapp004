import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-standard-teaser',
  templateUrl: './standard-teaser.component.html',
  styleUrls: ['./standard-teaser.component.scss']
})
export class StandardTeaserComponent implements OnInit {
  icon;
  ctas;
  desc;
  tags;
  tileImg;
  title;
  tileVideoSource;
  tileVideoURL;
  sttheme;
  ratings;
  noofreviews;
  noofratings;
  ratingsArr = [];
  @Input() data;
  @Input() theme;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    let arr = [];
    this.icon = this.data.icon;
    this.ctas = this.data.cta;
    this.desc = this.getTrimmedData(this.trimStr(this.data.desc || ''), 100);
    this.tags = this.data.tags;
    this.tileImg = this.data.tileImg;
    this.title = this.getTrimmedData(this.trimStr(this.data.title || ''), 40);
    this.ratings = this.data.ratings;
    this.noofreviews = this.data.noofreviews || 0;
    this.noofratings = this.data.noofratings || 0;
    this.sttheme = this.theme;
    if ((this.data.tileVideo || {}).source && (this.data.tileVideo || {}).url) {
      this.tileVideoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.tileVideo.url);
      this.tileVideoSource = this.data.tileVideo.source;
    }
    try {
      let r = Math.round(this.ratings * 10) / 10;
      r = parseFloat(r.toFixed(1));
      for (; r > 0.8; r--) {
        arr.push('star');
      }
      if (r >= 0.9) {
        arr.push('star');
      } else if (0.1 <= r && r < 0.8) {
        arr.push('star_half');
      }
      for (let s = arr.length + 1; s<=5; s++) {
        arr.push('star_border');
      }
    } catch (e) {}
    this.ratingsArr = arr;
  }

  trimStr(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }

  getTrimmedData(str, num) {
    let st = '';
    const starr = str.split(' ');
    for (let item of starr) {
      if (st.length < num) {
        st += ' ' + item;
      }
    }
    st = this.trimStr(st);
    st += str === st ? '' : '...';
    return st;
  }

  getPlural(val, str) {
    try {
      if (parseInt(val, 10) > 1) {
        return '&nbsp;' + str + 's';
      }
    } catch (e) {}
    return '&nbsp;' + str;
  }

  get99(val) {
    try {
      if (parseInt(val, 10) > 99) {
        return '99+';
      }
    } catch (e) {}
    return val;
  }
}
