import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {

  @Input() buttontype = 'button';
  @Input() cssclass = '';
  @Input() href = '#';
  @Input() icon = '';
  @Input() tag = '';
  @Input() text = '';
  @Input() title = '';
  @Input() index = -1;
  @Input() last = true;

  constructor() { }

  ngOnInit() {

  }

  generateCssClass(val) {
    let str = this.cssclass;
    if (this.icon && this.text) {
      str += ' txt-icn';
    }
    if (this.icon && !this.text) {
      str += ' icn-o';
    }
    if (!this.icon && this.text) {
      str += ' txt-o';
    }
    if (!val) {
      let strArr = str.split(' ');
      for (let i of strArr) {
        if (i.indexOf('t-dark') > -1 || i.indexOf('t-light') > -1) {
          str = i;
          break;
        }
      }
      return str;
    }
    return str;
  }
}
