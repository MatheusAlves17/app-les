import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ICart } from '../interfaces/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  apiUrl = 'http://46.101.179.199/cart';

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

  ) { }

  getAllCart(){
    return this.http.get(`${this.apiUrl}`, this.httpOptions)
  }

  getCart(id: any){
    return this.http.get(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  createCart(cart: any){
    return this.http.post(this.apiUrl, cart, this.httpOptions)
  }

  updateCart(id: string, cart: ICart){
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, cart, this.httpOptions)
  }

  deleteCart(id: string){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, this.httpOptions)
  }

}
