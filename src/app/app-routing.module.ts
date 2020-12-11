import { AuthRoutesService } from './auth-routes.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginPageComponent},
  {path:"home",component:HomeComponentComponent,canActivate:[AuthRoutesService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
