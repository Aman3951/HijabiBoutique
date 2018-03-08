import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './modules/public/pages/home-page/home-page.component';
import { HeaderComponent } from './modules/public/components/header/header.component';
import { NavBarComponent } from './modules/public/components/nav-bar/nav-bar.component';
import { HomeBodyComponent } from './modules/public/components/home-body/home-body.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { SidebarModule } from 'ng-sidebar';
// Angular Material 
import { MatToolbarModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginHeaderComponent } from './modules/public/components/login-header/login-header.component';
import { LoginBodyComponent } from './modules/public/components/login-body/login-body.component';
import { LoginComponent } from './modules/public/pages/login/login.component';
import { SignupComponent } from './modules/public/components/signup/signup.component';
import { ProductNavbarComponent } from './modules/public/components/product-navbar/product-navbar.component';
import { ProductLeftSideBarComponent } from './modules/public/components/product-left-side-bar/product-left-side-bar.component';
import { ProductsComponent } from './modules/public/pages/products/products.component';
import { ProductHeaderComponent } from './modules/public/components/product-header/product-header.component';
import { AboutComponent } from './modules/public/pages/about/about.component';
import { AboutUsComponent } from './modules/public/components/about-us/about-us.component';

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
    SignupComponent,
    ProductNavbarComponent,
    ProductLeftSideBarComponent,
    ProductsComponent,
    ProductHeaderComponent,
    AboutComponent,
    AboutUsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatDialogModule,
    SidebarModule,
    RouterModule.forRoot([
      { 
        path:'',
        component:HomePageComponent,
      },
      {
        path:'login',
        component:LoginComponent,
      },
      {
        path:'products',
        component:ProductsComponent,
      },
      {
        path:'about',
        component:AboutComponent,
      }
    ])

  ],
  entryComponents: [
    SignupComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
