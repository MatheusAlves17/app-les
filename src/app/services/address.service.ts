import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { IAddress } from '../interfaces/Address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  apiUrl = 'http://46.101.179.199/address';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };


  constructor(
    private http: HttpClient
  ) {}

  getAddress(id: any){
    return this.http.get(`${this.apiUrl}`)
  }

}
