import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  quantity: number = 0;

  sum(){
    this.quantity = this.quantity + 1;
  }
  sub(){
    this.quantity = this.quantity - 1;
  }
}
