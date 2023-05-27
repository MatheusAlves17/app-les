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

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void{

    this.id  = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id')  : '';
    this.getCart();
  }

  sum(){
    this.quantity = this.quantity + 1;
  }
  sub(){
    this.quantity = this.quantity - 1;
  }

    getCart(){
      this.cartService.getCart(this.id).subscribe((data: any) => {
        console.dir(data, {depth: null});

      })
    }

}
