import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { LoginComponent } from './pages/login/login.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environments";
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import {FormsModule} from "@angular/forms";
import { SuperuserPageComponent } from './pages/superuser-page/superuser-page.component';
import { SuperuserContentPageComponent } from './pages/superuser-content-page/superuser-content-page.component';
import { UserContentPageComponent } from './pages/user-content-page/user-content-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    LoginComponent,
    UserPageComponent,
    NavbarComponent,
    SuperuserPageComponent,
    SuperuserContentPageComponent,
    UserContentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
