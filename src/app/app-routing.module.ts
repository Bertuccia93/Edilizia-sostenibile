import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DetailBookComponent } from './component/detail-book/detail-book.component';
import { MyBookComponent } from './component/my-book/my-book.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'my-book/:id', component: MyBookComponent },
  { path: 'details', component: DetailBookComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
