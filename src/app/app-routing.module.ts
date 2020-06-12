import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from './Components/main-screen/main-screen.component';
import { AboutUsScreenComponent } from './Components/about-us-screen/about-us-screen.component';
import { LoginScreenComponent } from './Components/login-screen/login-screen.component';


const routes: Routes = [
  {
    path: "",
    component: MainScreenComponent
  },
  {
    path: "login",
    component: LoginScreenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
