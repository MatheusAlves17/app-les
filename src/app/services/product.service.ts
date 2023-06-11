import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { IProduct } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'http://46.101.179.199/product';
  // apiUrl = 'http://localhost:3333/product';
  tokenJWT!: string | null;
  access_token!: string | null;
  httpOptions!: Object;


  constructor(
    private http: HttpClient

  ) {
    this.getToken();
  }

  getToken(): void {
    this.tokenJWT = localStorage.getItem('token')
    this.access_token = this.tokenJWT ? JSON.parse(this.tokenJWT) : null;

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': `Bearer ${this.access_token}`,
      })
    };
  }

  getAllProduct(){
    if(!this.access_token) this.getToken();
    return this.http.get(`${this.apiUrl}`, this.httpOptions)
  }

  getProduct(id: any){
    return this.http.get(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  createProduct(product: any){
    // localStorage.setItem('product', JSON.stringify(product))
    return this.http.post(this.apiUrl, product, this.httpOptions)
  }

  updateProduct(id: string, product: IProduct){
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, product, this.httpOptions)
  }

  deleteProduct(id: string){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, this.httpOptions)
  }
}
