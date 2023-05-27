import { ProductService } from './../../services/product.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICard } from 'src/app/interfaces/Card';
import { CardService } from 'src/app/services/card.service';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  @Input() btnText!: string;
  @Input() data: IProduct | null = null;
  @Output() onSubmit = new EventEmitter<ICard>()

  productForm!: FormGroup;
  id: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : '';

    this.productForm = new FormGroup({
      price: new FormControl('',[ Validators.required]),
      stock: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      image: new FormControl(),
    })

    this.productService.getProduct(this.id).subscribe(((data: any) => {
      this.productForm = new FormGroup({
        price: new FormControl(data.price,[ Validators.required]),
        stock: new FormControl(data.stock, [Validators.required]),
        name: new FormControl(data.name, [Validators.required]),
        image: new FormControl(data.image),
      })
    }),(err: any) => {
      console.log(`erro: ${err.error.message}`);

    })
  }

  onFileSelected(event: any){
    console.dir(event, {depth: null});
    const file: File = event.target.files[0];
    this.productForm.patchValue({
      image: file
    })
  }

  get price() {
    return this.productForm.get('price')!;
  }
  get stock() {
    return this.productForm.get('stock')!;
  }
  get name() {
    return this.productForm.get('name')!;
  }

  submit(){
    const {value, valid} = this.productForm;
      this.onSubmit.emit(value)
  }

}
