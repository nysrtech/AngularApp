import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
//import {LoginService} from '../../services/public.service';


@Component({
 
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
public showbutton:any;
  constructor(
public _Router:Router,
//public _loginService:LoginService
) { }

  ngOnInit() {
  }

// login(data: any): void {
//         debugger;
//       //  this._globalURL.isLoading = true;
//         this._loginService.get("https://yrsnserver.herokuapp.com/api/Login?userName=" + data.value.contactName + "&password=" + data.value.contactNumber).
//             then((res) => {
//             }).catch((res) => {
//                 alert("Submitted Successfully..!!");

//             })
//     }

//     public CheckName(data: any) {
//         debugger;
//         if (data.length == 10) {
//             this._loginService.get("https://yrsnserver.herokuapp.com/api/checkNumber?contactNumber=" + data).
//                 then((res) => {
//                     if (res.contactId) {
//                         this.showbutton = true;
//                         alert("Number Is Akready Exist..!!");
//                     }
//                     else {
//                        // alert("Number saved successfully..!!");
//                         this.showbutton = false;
//                     }

//                 }).catch((res) => {

//                 })
//         }
//     }

}
