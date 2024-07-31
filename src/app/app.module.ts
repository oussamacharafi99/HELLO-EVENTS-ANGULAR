import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderHomeComponent } from './Home/header-home/header-home.component';
import { SingupComponent } from './Home/singup/singup.component';
import { LoginComponent } from './Home/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorAuth } from './Srevice/auth_interceptor.service';
import { HomeComponent } from './Home/home/home.component';
import { AddEventComponent } from './Dashboard/add-event/add-event.component';
import { EventComponent } from './Main/event/event.component';
import { ReservationComponent } from './Main/add-reservation/reservation.component';
import { ShowReservationComponent } from './Dashboard/show-reservation/show-reservation.component';
import { GetReservationByIdComponent } from './Main/get-reservation-by-id/get-reservation-by-id.component';
import { AddContactComponent } from './Main/add-contact/add-contact.component';
import { ShowContactComponent } from './Dashboard/show-contact/show-contact.component';
import { SearchComponent } from './Main/search/search.component';
import { MainComponent } from './Main/main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderHomeComponent,
    SingupComponent,
    LoginComponent,
    HomeComponent,
    AddEventComponent,
    EventComponent,
    ReservationComponent,
    ShowReservationComponent,
    GetReservationByIdComponent,
    AddContactComponent,
    ShowContactComponent,
    SearchComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorAuth,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
