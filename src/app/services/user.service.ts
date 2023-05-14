import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { ISignup } from '../interfaces/Singup';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://46.101.179.199/user';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };


  constructor(
    private http: HttpClient
  ) {}

  createUser(signup: ISignup): Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, signup);
  }

  getUser(id: string){
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateUser(id: any, data: any): Observable<any>{
    const url = `${this.apiUrl}/${id}`
    return this.http.put<any>(url, data);
  }


}
