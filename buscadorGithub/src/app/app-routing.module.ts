import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { ResultsComponent } from './pages/results/results.component';


const routes: Routes = [
  {
    path: '',
    component: IndexPageComponent
  },
  {
    path: 'results/:id',
    component: ResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
