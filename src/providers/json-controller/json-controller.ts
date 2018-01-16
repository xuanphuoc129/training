import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import { Observable } from "rxjs/Observable";
/*
  Generated class for the JsonControllerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JsonControllerProvider {

  constructor(public http: Http) {
    console.log('Hello JsonControllerProvider Provider');
  }

  getDataFromJSON(link: string) {
    return this.http.get(link).map(res => res.json());
  }

  postDataToJSON(link, data) {

    let headers = new Headers({ 'Content-Type': undefined });
    let options = new RequestOptions({ headers: headers });
    data = JSON.stringify(data);

    return this.http.post(link, data, options)
      .map(res => res.json());
     

  }
}
