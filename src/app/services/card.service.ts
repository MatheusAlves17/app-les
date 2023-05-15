import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ICard } from '../interfaces/Card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  apiUrl = 'http://46.101.179.199/payment_card';

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

  getAllCards(){
    return this.http.get(`${this.apiUrl}`, this.httpOptions)
  }

  getCard(id: any){
    return this.http.get(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  createCard(card: ICard){
    return this.http.post(this.apiUrl, card, this.httpOptions)
  }

  updateCard(id: string, card: ICard){
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, card, this.httpOptions)
  }

  deleteCard(id: string){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, this.httpOptions)
  }
}
