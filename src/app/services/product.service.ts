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

  getAllProduct(){
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
