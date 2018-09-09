import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Response, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    // headers: Headers;
    options: RequestOptions;

    private finalURL: string;
    private finalParam1: string | number;
    private finalParam2: string | number;
    private finalParam3: string | number;
    private paramFlag1: boolean;
    private paramFlag2: boolean;
    private paramFlag3: boolean;

    constructor(private _http: Http) {
        this.finalURL = null;
    }

    //Get request with no parameter
    get(url: string, param1?: string | number, param2?: string | number, param3?: string | number): Promise<any> {
        debugger;
        //if (this.checkParam(param1)) {
        //    this.paramFlag1 = true;
        //    this.finalURL = url + param1;
        //}
        //if (this.paramFlag1)
        //    if (this.checkParam(param2)) {
        //        this.paramFlag2 = true;
        //        this.finalURL = url + param2;
        //    }
        //if (this.paramFlag1 && this.paramFlag2) {
        //    if (this.checkParam(param3)) {
        //        this.paramFlag3 = true;
        //        this.finalURL = url + param3;
        //    }
        //}
        debugger;

        return this._http.get(url)
            .map((response: Response) => <any>response.json())
            .toPromise()
            .catch();
    }

    private checkParam(para: string | number): boolean {
        if (para.toString() == "" || para.toString() == undefined || para == undefined)
            return false;
        else return true;
    }

    // post(url: string, modeldata: any): Promise<any> {
    //     debugger;
    //     modeldata = "grant_type=password&password=" + modeldata.password + "&username=" + modeldata.username;
    //     return this._http
    //         .post(url, modeldata, this.getPutHeaders())
    //         .toPromise()
    //         .catch();
    // }
    // //To Define the Header information
    // private getPutHeaders() {
    //     let headers = new Headers();
    //     headers.append("content-Type", "application/x-www-form-urlencoded");
    //     return new RequestOptions({
    //         headers: headers,
    //         method: "POST"
    //     });
    // }

    // private extractData(res: Response) {
    //     let body = res.json();
    //     return body || {};
    // }
    // handleError(error: Response) {
    //     console.error(error);
    //     return Observable.throw(error);
    // }
}
