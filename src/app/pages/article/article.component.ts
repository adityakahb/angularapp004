import { Component, OnInit } from '@angular/core';
declare const require: any;
let articleJson = require('./../../data/article.json');

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  private articleData;
  constructor() { }

  ngOnInit() {
    this.articleData = articleJson;
  }

  getSectionClass(classname) {
    if ((classname || '').indexOf('food--') === -1) {
      return false;
    }
    return true;
  }
}
