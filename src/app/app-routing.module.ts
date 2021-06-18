import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';
import { HelpComponent } from './pages/help/help.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostajobComponent } from './pages/postajob/postajob.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path: '', component: DefaultComponent, children:[
    {path:'register', component:RegisterComponent},
    {path:'login\:email', component:LoginComponent},
    {path:'login',component: LoginComponent},
    {path:'', component: HomeComponent},
    {path:'postajob', component: PostajobComponent, canActivate:[AuthGuardService]},
    {path:"aboutus", component: AboutusComponent},
    {path:"help", component: HelpComponent},
    {path:'profile', component: ProfileComponent, canActivate:[AuthGuardService]},
    {path:'changepassword', component: ChangepasswordComponent, canActivate:[AuthGuardService]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
