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

  constructor() { }

  ngOnInit() {

  }

}
