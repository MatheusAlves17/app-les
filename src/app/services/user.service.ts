import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { ISignup } from '../interfaces/Singup';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://localhost:3333/user';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };


  constructor(
    private http: HttpClient
  ) {}

  createUser(formData: FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
