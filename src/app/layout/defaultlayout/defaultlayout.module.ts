import { CommonModule } from '@angular/common';
import { CtaModule } from './../../common-components/cta/cta.module';
import { DirectiveModule } from './../../directives/directive.module';
import { FormsModule } from '@angular/forms';
import { NgModule, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SitefooterComponent } from './../sitefooter/sitefooter.component';
import { SiteheaderComponent } from './../siteheader/siteheader.component';

import { MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatButtonModule, MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    CtaModule,
    DirectiveModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    RouterModule,
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
