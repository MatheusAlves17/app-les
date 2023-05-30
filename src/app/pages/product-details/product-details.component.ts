import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICart } from 'src/app/interfaces/Cart';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  message: string = '';
  id: string | null = '';
  product: any = [];
  items!: ICart;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : '';
    this.getProductById();
  }

  getProductById() {
    this.productService.getProduct(this.id).subscribe((data: any) => {
      this.product = data;
      localStorage.setItem('0', JSON.stringify(this.product))
    }, (err: any) => {
      console.log(`erro: ${err.error.message}`);

    })
  }

  addCart(id: string) {

    const items = [{product_id: id, quantity: 1}]
    this.cartService.createCart({items}).subscribe((data: any) => {
      this.router.navigate([`/compra/${data.id}`])
        localStorage.setItem('cart', JSON.stringify(data));
      console.dir(data, {depth: null});
      this.router.navigate([`carrinho/${data.results.id}`]);
    }
    )

  }
}
