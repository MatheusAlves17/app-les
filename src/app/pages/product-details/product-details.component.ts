import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  message: string = '';

  constructor(
    private router: Router
  ){}

  ngOnInit(): void{}

  addCart(id: string){
    this.message = "Item adicionado com sucesso!"
  }
}
