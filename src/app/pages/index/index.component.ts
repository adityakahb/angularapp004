import { Component, OnInit } from '@angular/core';
declare const require: any;
let indexJson = require('./../../data/index.json');

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  indexData;
  constructor() { }

  ngOnInit() {
    this.indexData = indexJson;
  }

  getSectionClass(classname) {
    if ((classname || '').indexOf('flaticon') === -1) {
      return false;
    }
    return true;
  }
}
