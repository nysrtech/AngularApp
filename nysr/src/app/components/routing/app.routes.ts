import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from '../public/public.component';
import { LoginComponent } from '../public/login/login.component';
import {HomeComponent} from '../home/home.component'; 
import {RegisterComponent} from '../public/register/register.component';
import {HomeBaseComponent} from '../home/HomeBase.component';
import {ViewProfileComponent} from '../home/view_profile.component';
import {EditProfileComponent} from '../home/edit_profile.component';

const publicroutes: Routes = [
    {
        path: '', component: PublicComponent, children: [
            { path: '', component: LoginComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ],
    }  ,
    {
        path:'home', component:HomeBaseComponent, children:[
        { path: '', component:HomeComponent},
        { path: 'login', component: LoginComponent },
        {path: 'register', component: RegisterComponent }
        {path: "view_profile", component: ViewProfileComponent},
        {path: "edit_profile", component:EditProfileComponent}
        ]
   }
   
   ];

@NgModule({
    imports: [RouterModule.forRoot(publicroutes)],
    exports: [RouterModule]
})

export class PublicRoutes { }