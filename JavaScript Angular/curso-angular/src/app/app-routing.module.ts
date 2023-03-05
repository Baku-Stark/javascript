import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponentComponent } from './components/first-component/first-component.component';
import { RepeticaoForComponent } from './components/repeticao-for/repeticao-for.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: RepeticaoForComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
