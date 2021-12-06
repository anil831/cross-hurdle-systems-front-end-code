import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './custforms/login/login.component';
import { SignupComponent } from './custforms/signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
   },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
