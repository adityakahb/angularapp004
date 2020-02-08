import { CtaModule } from './../cta/cta.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StandardTeaserComponent } from './standard-teaser.component';
import { ResponsiveImageModule } from '../responsive-image/responsive-image.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    ResponsiveImageModule,
    CtaModule,
    MatCardModule
  ],
  declarations: [
    StandardTeaserComponent
  ],
  exports: [
    StandardTeaserComponent
  ]
})
export class StandardTeaserModule { }
