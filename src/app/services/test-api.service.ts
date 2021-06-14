import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../models/Config.model';

@Injectable({
  providedIn: 'root'
})
export class TestAPIService {

  constructor(private http: HttpClient) { }

  testAPI(){
    return this.http.get(new Config().baseURL + "/api/testAPI");
  }
}
