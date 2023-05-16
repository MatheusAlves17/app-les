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


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const urlId = this.route.snapshot.paramMap.get('id');
    this.id = urlId ? urlId : '';
  }

  async submit(data: any) {
    await this.productService.updateProduct(this.id, data).subscribe((data: any) => {
      console.log(`cadastrado com sucesso! ${data}`);
      this.message = "Cadastrado com sucesso!"
      this.router.navigate([`/cartoes/${data.user_id}`])
    })
  }
}
