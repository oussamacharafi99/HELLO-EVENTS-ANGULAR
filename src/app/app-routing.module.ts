import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { MainComponent } from './Main/main/main.component';

const routes: Routes = [
  {path:'' , component:HomeComponent}, 
  {path:'dashboard' , component:DashboardComponent },
  {path:'main' , component:MainComponent },
  {path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
