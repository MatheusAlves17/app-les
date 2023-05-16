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

  constructor(
    private router: Router,
    private productService: ProductService
  ){}

  ngOnInit(): void{
    this.getAllProducts()
  }

  goTo(id: string){
    this.router.navigate([`/produto/${id}`])
  }

  getAllProducts(){
    this.productService.getAllProduct().subscribe((data: any) => {
      this.products = data.results;
    })
  }
}
