import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";

@Injectable()
export class HttpWrapperService {

  url = 'http://localhost:4200/assets/data/books.json';

  constructor(private http: Http) {
  }


  async getJson(url): Promise<any> {
    try {
      const response = await this.http.get(url).toPromise();
      return {
        data: response.json(),
        success: true
      };
    }
    catch (e) {
      return {
        data: null,
        success: false
      };
    }
  }

  serverUrl = 'http://localhost:6002/';

  async postJson(url, body): Promise<any> {
    try {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      const apiUrl = this.serverUrl + url;
      const response = await this.http.post(apiUrl, body, options).toPromise();
      return {
        data: response.json(),
        success: true
      };
    }
    catch (e) {
      return {
        data: null,
        success: false
      };
    }
  }

  async postFormData(url, formData) {
    try {
      const apiUrl = this.serverUrl + url;
      let headers = new Headers();


      /** No need to include Content-Type in Angular 4 */
        //fu..
      //headers.append('Content-Type', 'multipart/form-data');
      //headers.append('Accept', 'application/json');
      let options = new RequestOptions({ headers: headers });
      const response = await this.http.post(apiUrl, formData, options).toPromise();
      return {
        data: response.json(),
        success: true
      };

    }
    catch (ex) {
      return {
        data: ex,
        success: false
      };
    }
  }


}
