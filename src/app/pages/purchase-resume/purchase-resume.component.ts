import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-purchase-resume',
  templateUrl: './purchase-resume.component.html',
  styleUrls: ['./purchase-resume.component.css']
})
export class PurchaseResumeComponent {
  cart_items!: any;
  id: string | null = '';

  images: any = [];
  message: string = '';


  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.cartService.getCart(this.id).subscribe((data: any) => {
      this.cart_items = data.cart_items;
      let products = this.cart_items.map(({product}: any) => ({product}))
      this.images = products.map(({product}: any) => product.image)


    })
  }

  buy() {
    const cartStorage = localStorage.getItem("CARRINHO");
    const cart = cartStorage ? JSON.parse(cartStorage) : '';

    this.cartService.payCart(this.id, cart).subscribe((data: any) => {
      console.dir(data);
      localStorage.removeItem('CARRINHO');
      localStorage.removeItem('cart');
      localStorage.removeItem('cartProducts');
      this.message = 'Compra finalizada! Acompanhe a entrega'
    }, (err: any) => {
      this.message = err.error.message;
      // this.router.navigate([`/home`])
    })
  }

}
