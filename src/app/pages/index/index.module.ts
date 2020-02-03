import { CommonModule } from '@angular/common';
import { CtaModule } from './../../common-components/cta/cta.module';
import { IndexbannerComponent } from './../../components/indexbanner/indexbanner.component';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { ResponsiveImageComponent } from './../../common-components/responsive-image/responsive-image.component';
import { StandardTeaserComponent } from './../../common-components/standard-teaser/standard-teaser.component';

@NgModule({
  imports: [
    CommonModule,
    CtaModule,
    IndexRoutingModule,
    MatCardModule,
  ],
  declarations: [
    IndexbannerComponent,
    IndexComponent,
    ResponsiveImageComponent,
    StandardTeaserComponent,
  ]
})
export class IndexModule { }
