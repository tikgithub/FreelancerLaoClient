import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../models/Config.model';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  constructor(private http: HttpClient) { }

  public uploadProfile(profile_pic: string){
    console.log(profile_pic);
    return this.http.post(new Config().baseURL + "/api/user/upload_profile", {profile_pic});
  }
}
