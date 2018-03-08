import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './modules/public/pages/home-page/home-page.component';
import { HeaderComponent } from './modules/public/components/header/header.component';
import { NavBarComponent } from './modules/public/components/nav-bar/nav-bar.component';
import { HomeBodyComponent } from './modules/public/components/home-body/home-body.component';

// Angular Material 
import { MatToolbarModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginHeaderComponent } from './modules/public/components/login-header/login-header.component';
import { LoginBodyComponent } from './modules/public/components/login-body/login-body.component';
import { LoginComponent } from './modules/public/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    NavBarComponent,
    HomeBodyComponent,
    LoginHeaderComponent,
    LoginBodyComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
