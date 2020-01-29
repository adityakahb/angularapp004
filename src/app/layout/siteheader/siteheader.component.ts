import { Component, AfterViewInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

declare const require: any;
declare const $: any;

let navJson = require('./../../data/megamenu.json');

@Component({
  selector: 'app-siteheader',
  templateUrl: './siteheader.component.html',
  styleUrls: ['./siteheader.component.scss']
})
export class SiteheaderComponent implements AfterViewInit {
  navData = navJson;
  isNavOpen = false;
  isUserNavOpen = false;
  isScrolledDown = false;
  constructor() { }

  ngAfterViewInit() {
    $('nav:first').accessibleMegaMenu();
    this.addScrollEvent(window);
  }

  addScrollEvent(window: Window) {
    let lastScrollTop = 0;
    let self = this;
    window.addEventListener('scroll', function() { // or window.addEventListener("scroll"....
      let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop){
        // downscroll code
        self.isScrolledDown = true;
      } else {
          // upscroll code
        self.isScrolledDown = false;
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
  }

  openNav() {
    this.isNavOpen = true;
  }

  openUserNav() {
    this.isUserNavOpen = true;
  }

  closeAllNav() {
    this.isNavOpen = false;
    this.isUserNavOpen = false;
  }

  onClickSubmit(formData) {
    alert('Your Email is : ' + formData.email);
  }
}
