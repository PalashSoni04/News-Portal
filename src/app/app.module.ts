import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainScreenComponent } from './Components/main-screen/main-screen.component';
import { AboutUsScreenComponent } from './Components/about-us-screen/about-us-screen.component';
import { NavbarComponentComponent } from './Components/navbar-component/navbar-component.component';
import { FooterComponentComponent } from './Components/footer-component/footer-component.component';
import { LoginScreenComponent } from './Components/login-screen/login-screen.component';
import { UserListScreenComponent } from './Components/user-list-screen/user-list-screen.component';
import { NewsListScreenComponent } from './Components/news-list-screen/news-list-screen.component';
import { GetNewUserScreenComponent } from './Components/get-new-user-screen/get-new-user-screen.component';
import { PublisherNewsScreenComponent } from './Components/publisher-news-screen/publisher-news-screen.component';
import { ActiveNewsScreenComponent } from './Components/active-news-screen/active-news-screen.component';
import { GetNewNewsScreenComponent } from './Components/get-new-news-screen/get-new-news-screen.component';

@NgModule({
    declarations: [AppComponent, MainScreenComponent, AboutUsScreenComponent, NavbarComponentComponent, FooterComponentComponent, LoginScreenComponent, UserListScreenComponent, NewsListScreenComponent, GetNewUserScreenComponent, PublisherNewsScreenComponent, ActiveNewsScreenComponent, GetNewNewsScreenComponent],
    imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
