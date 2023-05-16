import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  btnText: string = 'Salvar';
  message: string = "";
  data!: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ){}

  async submit(data: any){

    const formData = new FormData();
    formData.append('price', data.price);
    formData.append('stock', data.stock);
    formData.append('name', data.name);
    // formData.append('image', 'https://img.ltwebstatic.com/images3_pi/2019/12/04/1575456506ff76ccaa4ac5ea12c3396865f3f74f63_thumbnail_600x.webp');
    await this.productService.createProduct(data).subscribe((result: any) => {
      this.message = "Cadastrado com sucesso!"
      localStorage.setItem('result', JSON.stringify(result))
    }, (err: any) => {
      localStorage.setItem('result', JSON.stringify(err))
    })

    // this.router.navigate([`/produtos/${id}`])
    console.log(`event: ${event}`);

  }
}
