import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  quantity: number = 0;
  id: string | null = '';
  itemsCart!: any;
  cart: any = [];
  totalPrice: number = 0;


  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCart();
    this.calcTotalPrice();
  }

  getCart() {
    let items = localStorage.getItem('cartProducts');
    if (items) {
      this.itemsCart = JSON.parse(items);
      this.quantity = this.itemsCart.length;
    }
  }

  calcTotalPrice(): void {
    this.totalPrice = 0;
    this.itemsCart.map((item: any) => {
      this.totalPrice += item.price * item.quantity;
    })
  }


  sum(item: any) {
    let quantidade = this.itemsCart.filter((product: any) => product.id === item.id);
    quantidade[0].quantity = quantidade[0].quantity + 1;
    localStorage.setItem('cartProducts', JSON.stringify(this.itemsCart))
    this.calcTotalPrice();
  }

  sub(item: any) {
    let quantidade = this.itemsCart.filter((product: any) => product.id === item.id);
    quantidade[0].quantity = quantidade[0].quantity - 1;

    if (quantidade[0].quantity <= 0) {
      this.removeItem(quantidade[0].id);
    }
    localStorage.setItem('cartProducts', JSON.stringify(this.itemsCart));
    this.calcTotalPrice();
    this.quantity = this.itemsCart.length;
  }

  removeItem(product_id: string) {
    this.itemsCart = this.itemsCart.filter((product: any) => product.id !== product_id);
    localStorage.setItem('cartProducts', JSON.stringify(this.itemsCart));
    this.calcTotalPrice();
    this.quantity = this.itemsCart.length;
  }

  purchase() {
    let carrinho = this.itemsCart.map(({ id, quantity }: any) => ({ id, quantity }))

    let items = []
    let newItems: any;

    for (let i = 0; i < carrinho.length; i++) {
      newItems = {
        product_id: carrinho[i].id,
        quantity: carrinho[i].quantity
      }
      items.push(newItems)
    }

    console.dir(items);


    this.cartService.createCart({ items }).subscribe((data: any) => {
      this.router.navigate([`/compra/${data.id}`])
      localStorage.setItem('cart', JSON.stringify(data));
      localStorage.setItem('total', JSON.stringify(this.totalPrice))
      console.dir(data);
      this.router.navigate([`carrinho/${data.results.id}`]);
    }
    )
  }

}
