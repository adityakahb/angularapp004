import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {
  /*
  [tag]="'a'"
            [href]="cta.link"
            [title]="cta.title"
            [class]="btn"
            [ngClass]="cta.type === 'secondary' ? 'btn-outline-primary' : 'btn-primary'"
            [text]="cta.title"
            [icon]="keyboard_arrow_right"
  */
  @Input() tag;
  @Input() href = '#';
  @Input() title = '';
  @Input() cssclass = '';
  @Input() text = '';
  @Input() icon = '';
  @Input() csstype = 'button';

  constructor() { }

  ngOnInit() {

  }

}
