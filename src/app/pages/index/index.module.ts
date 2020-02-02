import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

import { IndexbannerComponent } from './../../components/indexbanner/indexbanner.component';
import { ResponsiveImageComponent } from './../../common-components/responsive-image/responsive-image.component';
import { StandardTeaserComponent } from './../../common-components/standard-teaser/standard-teaser.component';
import { CtaComponent } from './../../common-components/cta/cta.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatCardModule,
    CommonModule,
    IndexRoutingModule,
  ],
  declarations: [
    CtaComponent,
    IndexbannerComponent,
    IndexComponent,
    ResponsiveImageComponent,
    StandardTeaserComponent,
  ]
})
export class IndexModule { }
