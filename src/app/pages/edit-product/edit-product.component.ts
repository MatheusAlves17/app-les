import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  btnText: string = 'Salvar';
  message: string = "";
  data!: any;
  id: string = '';
  userId: string = '';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    let userId = user ? JSON.parse(user) : null;
    this.userId = userId.id;
    console.log(this.userId);


    const urlId = this.route.snapshot.paramMap.get('id');
    this.id = urlId ? urlId : '';
  }

  async submit(data: any) {
    await this.productService.updateProduct(this.id, data).subscribe((data: any) => {
      console.log(`cadastrado com sucesso! ${data}`);
      this.message = "Alterado com sucesso!"
      // this.router.navigate([`/cartoes/:${this.userId}`])
    })
  }
}
