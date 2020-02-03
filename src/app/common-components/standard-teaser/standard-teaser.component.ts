import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-standard-teaser',
  templateUrl: './standard-teaser.component.html',
  styleUrls: ['./standard-teaser.component.scss']
})
export class StandardTeaserComponent implements OnInit {
  private avtarImg;
  private ctas;
  private desc;
  private tags;
  private tileImg;
  private title;

  @Input() data;
  constructor() { }

  ngOnInit() {
    this.avtarImg = this.data.avtarImg;
    this.ctas = this.data.cta;
    this.desc = this.getTrimmedData(this.trimStr(this.data.desc || ''), 200);
    this.tags = this.data.tags;
    this.tileImg = this.data.tileImg;
    this.title = this.getTrimmedData(this.trimStr(this.data.title || ''), 40);
  }

  trimStr(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }

  getTrimmedData(str, num) {
    let st = '';
    for (let item of str) {
      if (st.length < num) {
        st += item;
      }
    }
    st = this.trimStr(st);
    st += str === st ? '' : '...';
    return st;
  }
}
