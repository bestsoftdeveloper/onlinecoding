import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpWrapperService {

    url = 'http://localhost:4200/assets/data/books.json';
    constructor(private http: Http) { }


    async getJson(url): Promise<any> {
      try {
        const response = await this.http.get(url).toPromise();
        return{
          data: response.json(),
          success: true
        };
      }
      catch(e)
      {
        return{
          data:null,
          success: false
        };
      }
    }

    serverUrl = 'http://localhost:6002/';

    async postJson(url, body): Promise<any> {
      try {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        const apiUrl = this.serverUrl + url;
        const response = await this.http.post(apiUrl, body, options).toPromise();
        return{
          data: response.json(),
          success: true
        };
      }
      catch(e)
      {
        return{
          data:null,
          success: false
        };
      }
    }



}
