import { Component, AfterViewInit, HostListener, Renderer2 } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

declare const require: any;
declare const $: any;

const navJson = require('./../../data/megamenu.json');
const langJson = require('./../../data/lang.json');
let lastScrollTop = 0;
let lastScrollTopVal = 0;
let bodyElem;
let htmlElem;
const className = 'nav-open';

@Component({
  selector: 'app-siteheader',
  templateUrl: './siteheader.component.html',
  styleUrls: ['./siteheader.component.scss']
})
export class SiteheaderComponent implements AfterViewInit {
  navData = navJson;
  langData = langJson;
  isNavOpen = false;
  isUserNavOpen = false;
  isSearchNavOpen = false;
  isLangNavOpen = false;
  isScrolledDown = false;
  langArr = [];
  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    if (window && document) {
      $('nav:first').accessibleMegaMenu();
      bodyElem = document.querySelector('body');
      htmlElem = document.documentElement;
    }
    this.langData.forEach((item, index) => {
      if (index !== 0) {
        this.langArr.push(item);
      }
    });
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    if (window && document) {
      lastScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (lastScrollTop > 0) {
        // this.isScrolledDown = true;
        this.isScrolledDown = false;
      } else if (this.isScrolledDown && lastScrollTop <= 0) {
        this.isScrolledDown = false;
      }
    }
  }

  updateScrollVal() {
    if (window && document && bodyElem) {
      bodyElem.classList.add(className);
      bodyElem.style.top = (-1 * lastScrollTop) + 'px';
      lastScrollTopVal = lastScrollTop;
    }
  }

  openNav() {
    this.isNavOpen = true;
    this.updateScrollVal();
  }

  openSearchNav() {
    this.isSearchNavOpen = true;
    this.updateScrollVal();
  }

  openLangNav() {
    this.isLangNavOpen = true;
    this.updateScrollVal();
  }

  openUserNav() {
    this.isUserNavOpen = true;
    this.updateScrollVal();
  }

  closeAllNav() {
    this.isNavOpen = false;
    this.isUserNavOpen = false;
    this.isLangNavOpen = false;
    this.isSearchNavOpen = false;
    if (window && document && htmlElem && bodyElem && bodyElem.classList.contains(className)) {
      bodyElem.removeAttribute('style');
      bodyElem.classList.remove(className);
      window.scroll({
        top: lastScrollTopVal
      });
    }
  }

  onClickSubmit(formData) {
    alert('Your Email is : ' + formData.email);
  }
}
