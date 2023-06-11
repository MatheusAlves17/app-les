import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private router: Router,
    private _snackBar: MatSnackBar

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.cartService.getCart(this.id).subscribe((data: any) => {
      this.cart_items = data.cart_items;
      let products = this.cart_items.map(({ product }: any) => ({ product }))
      this.images = products.map(({ product }: any) => product.image)


    })
  }

  buy() {
    const cartStorage = localStorage.getItem("CART");
    const cart = cartStorage ? JSON.parse(cartStorage) : '';
    const cartAdressStorage = localStorage.getItem("CART_ADDRESS");
    const address = cartAdressStorage ? JSON.parse(cartAdressStorage) : '';
    // console.dir(cart)

    let items = {
      address_id: address,
      payment_cards: cart
    }

    this.cartService.payCart(this.id, items).subscribe((data: any) => {
      console.dir(data);
      localStorage.removeItem('CARRINHO');
      localStorage.removeItem('cart');
      localStorage.removeItem('cartProducts');
      this.openSnackBar('Compra finalizada!', 'fechar');
    }, (err: any) => {
      this.openSnackBar(err.error.message, 'fechar');
      // this.router.navigate([`/home`])
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
