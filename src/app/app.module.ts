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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    NavBarComponent,
    HomeBodyComponent,

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
