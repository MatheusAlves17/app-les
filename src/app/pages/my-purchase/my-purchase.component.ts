import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-my-purchase',
  templateUrl: './my-purchase.component.html',
  styleUrls: ['./my-purchase.component.css']
})
export class MyPurchaseComponent {

  id: string | null = '';
  orderList: [] = [];
  cartItem!: any;
  products: [] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService
    ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.cartService.getAllCart().subscribe((data: any) => {
      let paid = data.results;
      this.orderList = paid.filter((item: any) => item.paid_status === 'PAID')
      this.cartItem = this.orderList.map((item: any) => item.cart_items);
      console.dir(this.cartItem, {depth: null})
    })
  }

  goTo(id: string){
    this.router.navigate([`/devolucao/${id}`])
  }

}
