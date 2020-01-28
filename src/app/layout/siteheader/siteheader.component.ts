import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

declare const require: any;
declare const $: any;
declare const Waypoint:any;

let navJson = require('./../../data/megamenu.json');

@Component({
  selector: 'app-siteheader',
  templateUrl: './siteheader.component.html',
  styleUrls: ['./siteheader.component.scss']
})
export class SiteheaderComponent implements OnInit {
  navData = navJson;
  isNavOpen = false;
  isUserNavOpen = false;
  isScrolledDown = false;
  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    let self = this;
    $("nav:first").accessibleMegaMenu();
    let waypoint = new Waypoint({
      element: document.getElementById('siteheader-comp'),
      handler: function(direction) {
        if (direction === 'down') {
          self.isScrolledDown = true;
        } else {
          self.isScrolledDown = false;
        }
      },
      offset: '100%'
    })
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
