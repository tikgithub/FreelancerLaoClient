import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../models/Config.model';
import { Register } from "../models/Register.model";

@Injectable({
  providedIn: 'root'
})
export class RegisterAPIService {

  constructor(private http: HttpClient) { }

  public add(req: Register){
    return this.http.post(new Config().baseURL + "/api/user", req);
  }
}
