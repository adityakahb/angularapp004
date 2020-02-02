import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-standard-teaser',
  templateUrl: './standard-teaser.component.html',
  styleUrls: ['./standard-teaser.component.scss']
})
export class StandardTeaserComponent implements OnInit {
  private tileImg;
  private avtarImg;
  private title;
  private desc;
  private tags;
  private ctas;
  @Input() data;
  constructor() { }

  ngOnInit() {
    this.tileImg = this.data.tileImg;
    this.avtarImg = this.data.avtarImg;
    this.title = this.getTrimmedData(this.trimStr(this.data.title || ''), 40);
    this.desc = this.getTrimmedData(this.trimStr(this.data.desc || ''), 160);
    this.tags = this.data.tags;
    this.ctas = this.data.cta;
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
