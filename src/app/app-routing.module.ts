import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

import { AdminguardGuard } from './guard/adminguard.guard';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'registration', component: RegistrationComponent},
  {path: 'forgot', component: ForgotpasswordComponent},
  
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'adminhome', component: AdminhomeComponent, canActivate: [AdminguardGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
