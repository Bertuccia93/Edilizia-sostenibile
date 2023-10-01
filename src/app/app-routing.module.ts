import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

import { DetailBookComponent } from './component/detail-book/detail-book.component';
import { MyBookComponent } from './component/my-book/my-book.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'my-book/:id', component: MyBookComponent },
  { path: 'details', component: DetailBookComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
