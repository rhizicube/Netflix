import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AddMovieComponent } from './add-movie/add-movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { DetailsComponent } from './details/details.component';
import { CommonComponent } from './common/common.component';
import { RegisterComponent } from './register/register.component';
import { PagerrorComponent } from './pagerror/pagerror.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddMovieComponent,
    AuthComponent,
    DetailsComponent,
    CommonComponent,
    RegisterComponent,
    PagerrorComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
