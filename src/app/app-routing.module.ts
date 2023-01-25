import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guard/usuario.guard';

import { HomeComponent } from './pages/home/home.component';
import { MostarComponent } from './pages/mostar/mostar.component';
import { PruevaComponent } from './pages/prueva/prueva.component';


const routes: Routes = [
   {path:'login',component:HomeComponent},
  {path:'mostar/:id',component:MostarComponent},
  {path:'prueva',component:PruevaComponent ,canActivate:[UsuarioGuard]},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
