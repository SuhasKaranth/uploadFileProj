import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';

const routes: Routes = [
  { path: 'home', component: LoginComponent },
  
  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
// export const routing = RouterModule.forRoot(routes, { useHash: true });