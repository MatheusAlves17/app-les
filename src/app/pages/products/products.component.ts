import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from 'src/app/services/card.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  id: string | null = '';
  products: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
  ){}

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    let id = user ? JSON.parse(user) : null;
    this.id = id;
    this.getAllProducts()
  }

  getAllProducts(){
    this.productService.getAllProduct().subscribe((data: any) => {
      this.products = data.results;
    })
  }

  goToNewProduct(){
    this.router.navigate([`novo-produto/${this.id}`]);
  }

  goToEditProduct(id: string){
    this.router.navigate([`editar-produto/${id}`]);
  }

  delete(id: string){
    this.productService.deleteProduct(id).subscribe((data: any) => {
      console.log(`deletado com sucesso! ${data}`);
      this.getAllProducts()
    }, (err: any) => {
      console.log(`erro: ${err.error.message}`);

    })
  }
}
