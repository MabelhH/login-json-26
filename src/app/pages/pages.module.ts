import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { MostarComponent } from './mostar/mostar.component';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavartComponent } from './navart/navart.component';
import { PruevaComponent } from './prueva/prueva.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
    MostarComponent,
    NavartComponent,
    PruevaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    HttpClientModule  
  ],
  exports:[
    HomeComponent,
    MostarComponent,
    NavartComponent,
    PruevaComponent
  ]
})
export class PagesModule { }
