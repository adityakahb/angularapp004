import { ArticleComponent } from './article.component';
import { ArticleRoutingModule } from './article-routing.module';
import { CommonModule } from '@angular/common';
import { CtaModule } from './../../common-components/cta/cta.module';
import { NgModule } from '@angular/core';
import { ResponsiveImageModule } from './../../common-components/responsive-image/responsive-image.module';
import { SectionHeaderModule } from './../../common-components/section-header/section-header.module';
import { StandardTeaserModule } from './../../common-components/standard-teaser/standard-teaser.module';

@NgModule({
  imports: [
    ArticleRoutingModule,
    CommonModule,
    CtaModule,
    ResponsiveImageModule,
    SectionHeaderModule,
    StandardTeaserModule,
  ],
  declarations: [
    ArticleComponent
  ]
})
export class ArticleModule { }
