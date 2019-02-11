import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


let apiUrl = "https://volspb.ru/mobile/PHP-Slim-Restful-master/api/";
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }


	postData(credentials, type) {
	    return new Promise((resolve, reject) => {
	      let headers = new Headers();

	      this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers})
	        .subscribe(res => {
	          resolve(res.json());
	        }, (err) => {
	          reject(err);
	        });
	    });

	  }
}
