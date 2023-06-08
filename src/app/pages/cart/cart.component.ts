import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  quantity: number = 0;
  id: string | null= '';
  itemsCart!: any;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void{

    // this.id  = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id')  : '';
    this.getCart();
  }

  getCart(){
    let items = localStorage.getItem('cartProducts');
    if(items){
      this.itemsCart = JSON.parse(items);
      this.quantity = this.itemsCart.length;
      console.dir(this.itemsCart);
    }

  }

  sum(item: any){
    let quantidade = this.itemsCart.filter((product: any) => product.id === item.id );
    quantidade[0].quantity = quantidade[0].quantity + 1;
    localStorage.setItem('cartProducts', JSON.stringify(this.itemsCart))
  }

  sub(item: any){
    let quantidade = this.itemsCart.filter((product: any) => product.id === item.id );
    quantidade[0].quantity = quantidade[0].quantity - 1;

    if(quantidade[0].quantity <=0){
      this.removeItem(quantidade[0].id);
    }
    localStorage.setItem('cartProducts', JSON.stringify(this.itemsCart))

  }

  removeItem(product_id: string){
    this.itemsCart = this.itemsCart.filter((product: any) => product.id !== product_id);
    localStorage.setItem('cartProducts', JSON.stringify(this.itemsCart))
  }

}
