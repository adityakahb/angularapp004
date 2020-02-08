import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleModule } from './pages/article/article.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultLayoutModule } from './layout/defaultlayout/defaultlayout.module';
import { IndexModule } from './pages/index/index.module';
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    ArticleModule,
    BrowserAnimationsModule,
    BrowserModule,
    DefaultLayoutModule,
    IndexModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
