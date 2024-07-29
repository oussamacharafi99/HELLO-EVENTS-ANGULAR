import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroHomeComponent } from './Home/hero-home/hero-home.component';
import { HeaderHomeComponent } from './Home/header-home/header-home.component';
import { FoterHomeComponent } from './Home/foter-home/foter-home.component';
import { SingupComponent } from './Home/singup/singup.component';
import { LoginComponent } from './Home/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeroHomeComponent,
    HeaderHomeComponent,
    FoterHomeComponent,
    SingupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
