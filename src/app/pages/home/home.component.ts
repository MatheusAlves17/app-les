import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: any = [];
  itemsCart: any = [];
  productsCart: any = [];

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getAllProducts()
    let items = localStorage.getItem('cart');
    if (items) {
      this.itemsCart = JSON.parse(items)
    }
  }

  goTo(id: string) {
    this.router.navigate([`/produto/${id}`])
  }

  getAllProducts() {
    this.productService.getAllProduct().subscribe((data: any) => {
      this.products = data.results;
    })
  }

  addCart(id: string, item: any) {
    if (!this.itemsCart && !this.productsCart) {
      this.itemsCart = [];
      this.productsCart = [];
    }

    let newItem =
    {
      product_id: id,
      quantity: 1
    }

    item.quantity = 1;
    this.productsCart.push(item)

    this.itemsCart.push(newItem);

    localStorage.setItem('cart', JSON.stringify(this.itemsCart))
    localStorage.setItem('cartProducts', JSON.stringify(this.productsCart))
    console.dir(this.productsCart);
  }
}
