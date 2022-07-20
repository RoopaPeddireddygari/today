import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookRideComponent } from './book-ride/book-ride.component';
import { LoginGuardService } from './login/login-guard.service';
import { LoginComponent } from './login/login.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'book-ride',component:BookRideComponent,canActivate:[LoginGuardService]},
  {path:'ride-details',component:RideDetailsComponent,canActivate:[LoginGuardService]},
  {path:'offer-ride',component:OfferRideComponent,canActivate:[LoginGuardService]},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents =[LoginComponent,BookRideComponent]
