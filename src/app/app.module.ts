import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookRideComponent } from './book-ride/book-ride.component';
import { MouseHoverDirective } from './mouse-hover.directive';
import { LoginComponent } from './login/login.component';
import { RideFilterPipe } from './ride-filter.pipe';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookRideComponent,
    MouseHoverDirective,
    LoginComponent,
    RideFilterPipe,
    RideDetailsComponent,
    OfferRideComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
