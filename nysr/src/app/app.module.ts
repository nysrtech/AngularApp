import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PublicComponent } from './components/public/public.component';
import { PublicRoutes } from './components/routing/app.routes';
import { LoginComponent } from './components/public/login/login.component';
import {RegisterComponent} from './components/public/register/register.component';
import {LoginService} from './components/services/public.service';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HomeComponent} from './components/home/home.component';
import {HomeBaseComponent} from './components/home/HomeBase.component';
import {ViewProfileComponent} from './components/home/view_profile.component';
import {EditProfileComponent} from './components/home/edit_profile.component';




@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HomeBaseComponent,
    ViewProfileComponent,
    EditProfileComponent    
    
  ],
  imports: [
    BrowserModule,
    PublicRoutes,
    FormsModule,
    HttpModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
