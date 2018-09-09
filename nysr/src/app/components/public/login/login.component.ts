import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms/src/forms";
import {LoginService} from '../../services/public.service';

@Component({
 
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
public showbutton:any;
  constructor(
public _router:Router,
public _loginService:LoginService
) { }

  ngOnInit() {
  }

login(data: any): void {alert(data.username);
        debugger;
      //  this._globalURL.isLoading = true;
      console.log(data);
        this._loginService.get("https://yrsnserver.herokuapp.com/api/Login?userName=" + data.username + "&password=" + data.password).
            then((res) => {
            	if(res != 0){
            		alert("Log in sucessfully..!!"); 
            	this._router.navigate(['../home']);
            	}
            	else{
            		alert("User credential invalid..!!")
            	}
            }).catch((res) => {
                alert("Submitted Successfully..!!");

            })
    }

    public CheckName(data: any) {
        debugger;
        if (data.length == 10) {
            this._loginService.get("https://yrsnserver.herokuapp.com/api/checkNumber?contactNumber=" + data).
                then((res) => {
                    if (res.contactId) {
                        this.showbutton = true;
                        alert("Number Is Akready Exist..!!");
                    }
                    else {
                       // alert("Number saved successfully..!!");
                        this.showbutton = false;
                    }

                }).catch((res) => {

                })
        }
    }

}
