import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { HttpClient } from '@angular/common/http';
import { LoginReq } from '../models/loginReq';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiurl = "http://ecommerceapikaygyasi.azurewebsites.net/api/"

  constructor(private http:HttpClient) { }

  authUser(login:LoginReq){
    /* let userArray = [];

    if(localStorage.getItem('Users')){
      userArray = JSON.parse(localStorage.getItem('Users') || '{}');
    }

    return userArray.find((p:Register) => p.Email === email && p.Password === password); */

    return this.http.post(this.apiurl+"Account/Login", login)
  }
}
