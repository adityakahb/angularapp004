import { RecipeComponent } from './recipe.component';
import { DirectiveModule } from './../../directives/directive.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'pages/article', component: ArticleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, DirectiveModule]
})
export class RecipeRoutingModule { }
