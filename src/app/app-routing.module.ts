import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MostarComponent } from './pages/mostar/mostar.component';
import { PruevaComponent } from './pages/prueva/prueva.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'mostar/:id',component:MostarComponent},
  {path:'prueva',component:PruevaComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
