import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';

const routes: Routes = [
  {path:'/', component:LoginComponent}
];

export class AppRoutingModule {}