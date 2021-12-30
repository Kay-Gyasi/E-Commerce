import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private http:HttpClient) { }

  private readonly apiurl = "https://localhost:7164/api/"

  addUser(user: Register){
    /* let users = [];
    if(localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users') || '{}');
      users = [user, ...users];
    } else{
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users)); */

    let headers = new HttpHeaders()
    .set("content-type", "application/json; charset=UTF-8;");

    return this.http.post(this.apiurl+"User/AddUser", user, {headers:headers});
  }


}
