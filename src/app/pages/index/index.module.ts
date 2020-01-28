import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

import { IndexbannerComponent } from './../../components/indexbanner/indexbanner.component';
import { ResponsiveImageComponent } from './../../common-components/responsive-image/responsive-image.component';

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [
    MatCardModule,
    CommonModule,
    IndexRoutingModule,
    MatButtonModule
  ],
  declarations: [IndexComponent, IndexbannerComponent, ResponsiveImageComponent]
})
export class IndexModule { }
