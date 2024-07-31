import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderHomeComponent } from './Home/header-home/header-home.component';
import { FoterHomeComponent } from './Home/foter-home/foter-home.component';
import { SingupComponent } from './Home/singup/singup.component';
import { LoginComponent } from './Home/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorAuth } from './Srevice/auth_interceptor.service';
import { HomeComponent } from './Home/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderHomeComponent,
    FoterHomeComponent,
    SingupComponent,
    LoginComponent,
    HomeComponent
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
