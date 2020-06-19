import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from './Components/main-screen/main-screen.component';
import { AboutUsScreenComponent } from './Components/about-us-screen/about-us-screen.component';
import { LoginScreenComponent } from './Components/login-screen/login-screen.component';
import { UserListScreenComponent } from './Components/user-list-screen/user-list-screen.component';
import { PublisherListScreenComponent } from './Components/publisher-list-screen/publisher-list-screen.component';
import { NewsListScreenComponent } from './Components/news-list-screen/news-list-screen.component';


const routes: Routes = [
  {
    path: "",
    component: MainScreenComponent
  },
  {
    path: "login",
    component: LoginScreenComponent
  },
  {
    path: "userlist",
    component: UserListScreenComponent
  },
  {
    path: "newslist",
    component: NewsListScreenComponent
  },
  {
    path: "publisherlist",
    component: PublisherListScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
