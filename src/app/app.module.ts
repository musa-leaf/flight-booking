import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactsBarComponent } from './components/contacts-bar/contacts-bar.component';
import { AboutBarComponent } from './components/about-bar/about-bar.component';
import { AppRoutes } from './app.routes';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ViewComponent } from './components/view/view.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BookingFormComponent,
    NavBarComponent,
    ContactsBarComponent,
    AboutBarComponent,
    HomePageComponent,
    ViewComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
