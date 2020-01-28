import { SiteheaderComponent } from './../siteheader/siteheader.component';
import { SitefooterComponent } from './../sitefooter/sitefooter.component';
import { DirectiveModule } from './../../directives/directive.module';

import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from "@angular/material/Input";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DirectiveModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    SiteheaderComponent,
    SitefooterComponent
  ],
  declarations: [
    SiteheaderComponent,
    SitefooterComponent
  ],
  providers: [
  ]
})
export class DefaultLayoutModule { }
