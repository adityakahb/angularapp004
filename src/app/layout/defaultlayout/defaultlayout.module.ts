import { SiteheaderComponent } from './../siteheader/siteheader.component';
import { SitefooterComponent } from './../sitefooter/sitefooter.component';
import { DirectiveModule } from './../../directives/directive.module';

import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatButtonModule, MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    RouterModule
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
