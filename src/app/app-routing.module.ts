import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from './Components/main-screen/main-screen.component';
import { AboutUsScreenComponent } from './Components/about-us-screen/about-us-screen.component';
import { LoginScreenComponent } from './Components/login-screen/login-screen.component';
import { UserListScreenComponent } from './Components/user-list-screen/user-list-screen.component';
import { NewsListScreenComponent } from './Components/news-list-screen/news-list-screen.component';
import { GetNewUserScreenComponent } from './Components/get-new-user-screen/get-new-user-screen.component';
import { ActiveNewsScreenComponent } from './Components/active-news-screen/active-news-screen.component';
import { PublisherNewsScreenComponent } from './Components/publisher-news-screen/publisher-news-screen.component';
import { GetNewNewsScreenComponent } from './Components/get-new-news-screen/get-new-news-screen.component';

const routes: Routes = [
    {
        path: '',
        component: MainScreenComponent,
    },
    {
        path: 'aboutus',
        component: AboutUsScreenComponent,
    },
    {
        path: 'login',
        component: LoginScreenComponent,
    },
    {
        path: 'userlist',
        component: UserListScreenComponent,
    },
    {
        path: 'newslist',
        component: NewsListScreenComponent,
    },
    {
        path: 'getuser',
        component: GetNewUserScreenComponent,
    },
    {
        path: 'getnews',
        component: GetNewNewsScreenComponent,
    },
    {
        path: 'activenews',
        component: ActiveNewsScreenComponent,
    },
    {
        path: 'publishernews',
        component: PublisherNewsScreenComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
