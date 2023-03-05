import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// [first-component.component.ts]
import { FirstComponentComponent } from './components/first-component/first-component.component';

// [pipes.component.ts]
import { PipesComponent } from './components/pipes/pipes.component';

// [diretivas.component.ts]
import { DiretivasComponent } from './components/diretivas/diretivas.component';

// [repeticao-for.component.ts]
import { RepeticaoForComponent } from './components/repeticao-for/repeticao-for.component';

// [item-detail-for.component.ts]
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: RepeticaoForComponent},
  {path: 'list/:id', component: ItemDetailComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'diretivas', component: DiretivasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
