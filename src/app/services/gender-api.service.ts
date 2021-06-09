import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs'
import { Config } from '../models/Config.model';

@Injectable({
  providedIn: 'root'
})
export class GenderAPIService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(new Config().baseURL + "/api/gender");
  }
}
