import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private productService: ProductService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getAllProducts()
    let product = localStorage.getItem('cartProducts');
    if (product) {
      this.productsCart = JSON.parse(product)
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
    let existItem = this.productsCart.find((products: any) => products.id == item.id);
    console.log("existItem", existItem);
    if(existItem) {
      existItem.quantity += 1;
      console.log("existItem", existItem, this.itemsCart);
      // this.productsCart = this.itemsCart;
    }
    else {
      item.quantity = 1;
      this.productsCart.push(item)
    }

    localStorage.setItem('cartProducts', JSON.stringify(this.productsCart))
    console.dir(this.productsCart);

    this.openSnackBar('Seu produto foi adicionado ao carrinho', 'fechar')
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
