import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  message: string = '';

  constructor(){}

  ngOnInit(): void{}

  addCart(id: string){
    this.message = "Item adicionado com sucesso!"
  }
}
