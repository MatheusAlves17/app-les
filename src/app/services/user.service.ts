import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { ISignup } from '../interfaces/Singup';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // apiUrl = 'http://46.101.179.199/user/';
  // apiUrl = 'http://46.101.179.199/user/';
  apiUrl = 'http://localhost:3333/user';


  tokenJWT: any = localStorage.getItem('token')
  access_token: any = this.tokenJWT ? JSON.parse(this.tokenJWT) : null;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${this.access_token}`,
    })
  };


  constructor(
    private http: HttpClient
  ) {}


  login(user: any){
    return this.http.post(`${this.apiUrl}/session/`, user)
  }

  createUser(signup: ISignup): Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, signup);
  }

  getUser(id: string){
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateUser(id: any, data: any): Observable<any>{
    const url = `${this.apiUrl}/${id}`
    console.log(`url: ${url}`);

    return this.http.put<any>(url, data, this.httpOptions);
  }


}
