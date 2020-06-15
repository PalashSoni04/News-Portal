import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainScreenComponent } from './Components/main-screen/main-screen.component';
import { AboutUsScreenComponent } from './Components/about-us-screen/about-us-screen.component';
import { NavbarComponentComponent } from './Components/navbar-component/navbar-component.component';
import { FooterComponentComponent } from './Components/footer-component/footer-component.component';
import { LoginScreenComponent } from './Components/login-screen/login-screen.component';
import { UserListScreenComponent } from './Components/user-list-screen/user-list-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    AboutUsScreenComponent,
    NavbarComponentComponent,
    FooterComponentComponent,
    LoginScreenComponent,
    UserListScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
