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
  // apiUrl = 'http://localhost:3333/address';

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

  getAllAddress(){
    return this.http.get(`${this.apiUrl}`, this.httpOptions)
  }

  getAddress(id: any){
    return this.http.get(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  createAddress(address: IAddress){
    return this.http.post(this.apiUrl, address, this.httpOptions)
  }

  updateAddress(id: string, address: IAddress){
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, address, this.httpOptions)
  }

  deleteAddress(id: string){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, this.httpOptions)
  }

}
