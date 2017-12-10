import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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

    async postJson(url, body): Promise<any> {
      try {
        const response = await this.http.post(url, body).toPromise();
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
