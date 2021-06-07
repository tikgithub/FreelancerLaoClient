import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path: '', component: DefaultComponent, children:[
    {path:'register', component:RegisterComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
