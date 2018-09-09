import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {LoginService} from '../../services/public.service';


@Component({
 
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
public showbutton:boolean = true;
public mobileValue:string;
public usernameValue:string;
public emailValue:string;
public emaillotp:string;
public mobotp:string;
public uid:number;
  constructor(
public _Router:Router,
public _loginService:LoginService
) { }

  ngOnInit() {
  }
  update(data:any){
    alert(data.emailotp +" "+ data.mobileotp);
    if(data.emailotp == this.emaillotp && data.mobileotp == this.mobotp){
         this._loginService.get("http://localhost:3000/api/updateOTP?uid=" + this.uid).
            then((res) => {//alert(res);
              if(res != 0){
                this.showbutton = false;
                this.emailValue = null;

                //data.email.control.reset();
                 alert("You are registered sucessfully..!!");
                //data.control.reset();
              }
              else{
                this.showbutton = true;

              }

            }).catch((res) => {
                alert("CAtch block..!!");

            })
     
    }
  }

checkEmail($event, data:NgForm): void {
        debugger;
      //  this._globalURL.isLoading = true;
     // alert($event.target.value);
        this._loginService.get("http://localhost:3000/api/checkEmail?email=" + $event.target.value). 
            then((res) => {alert(res);
              if(res != 0){
                this.showbutton = false;
                this.emailValue = null;

                //data.email.control.reset();
                alert("Mail Is Already Exist..!!");
                //data.control.reset();
              }
              else{
                this.showbutton = true;
                 alert("Valid Email..!!");
              }

            }).catch((res) => {
                alert("CAtch block..!!");

            })
    }
register(data:any){
  alert(data.username);
   this._loginService.get("http://localhost:3000/api/insertuser?username=" + data.username +"&password="+ data.password +"&email="+data.email+"&mobile="+data.mobile).
            then((res) => {
             if(res != null){               
                alert("OTP sent to entered emailId and mobile number..!!");debugger;
                this.mobotp = res.Mobile_OTP; //alert(res.mobileotp+ " "+res.emailotp +" "+res.pro_id)
                this.emaillotp = res.Email_OTP;
                this.uid = res.pro_id;
              }
              else{
                this.showbutton = true;
              }

            }).catch((res) => {
                alert("CAtch block..!!");

            })

}
    checkUsername($event): void {
        debugger;
      //  this._globalURL.isLoading = true;
        this._loginService.get("http://localhost:3000/api/checkusername?username=" + $event.target.value).
            then((res) => {
             if(res != 0){
                  alert("Username Is Already Exist..!!");
                this.showbutton = false;
                this.usernameValue = null;
             
              }
              else{
                this.showbutton = true;
                 alert("Valid Username..!!");
              }

            }).catch((res) => {
                alert("CAtch block..!!");

            })
    }

    public checkMobile($event) {
        debugger;
        if ($event.target.value.length == 10) {
            this._loginService.get("http://localhost:3000/api/checkMobile?mobile=" + $event.target.value).
                then((res) => {
                    if (res != 0) {
                       alert("Number Is Akready Exist..!!");
                        this.showbutton = false;
                        this.mobileValue = null;
                       
                    }
                    else {
                        this.showbutton = true;
                         alert("Valid Mobile No..!!");
                    }

                }).catch((res) => {

                })
        }
    }

}
