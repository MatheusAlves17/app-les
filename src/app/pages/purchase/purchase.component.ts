import { CardService } from 'src/app/services/card.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';


@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {


  addressId: string ='';
  value: number = 0;
  // addressId: string ='';

  id: string | null = '';
  token: string = '';

  formPayment: any = [{ id: 'input1', name: 'input1', value: '' }];
  formPaymentOptions: any;
  formPaymentMessage: string = '';

  addressOptions: any;
  addressMessage: string = '';
  purchaseForm!: FormGroup;

  cardsPayment: string[] = [];

  percentage: number[] = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
  porcentagePayment: number[] = [];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cardService: CardService,
    private addressService: AddressService
  ) { }

  ngOnInit() {
    this.getAllCards();
    this.getAllAddress();
    const user = localStorage.getItem('user');
    const data = user ? JSON.parse(user) : '';
    this.id = data.id;

    this.purchaseForm = new FormGroup({
      address: new FormControl('', [Validators.required]),
      payment: new FormControl('', [Validators.required]),
      // percentage: new FormControl('', [Validators.required]),
    })


  }

  addFormPayment() {
    const novoInput = { id: `input${this.formPayment.length + 1}`, name: `input${this.formPayment.length + 1}`, value: '' };
    this.formPayment.push(novoInput);
  }

  getAllAddress() {
    this.addressService.getAllAddress().subscribe((data: any) => {
      this.addressOptions = data.results;
      console.log(`achados: ${data}`);

      if (data.results.length === 0) {
        this.addressMessage = 'Parece que você não cadastrou nenhum endereço'
      }
    })
  }
  getAllCards() {
    this.cardService.getAllCards().subscribe((data: any) => {
      this.formPaymentOptions = data.results;
      if (data.results.length === 0) {
        this.formPaymentMessage = 'Parece que você não cadastrou nenhum método de pagamento'
      }
    })
  }

  pushCard(id: string) {
    this.cardsPayment.push(id);
    // console.dir(this.cardsPayment, { depth: null });
  }

  pushPorcentage() {
    if (this.purchaseForm !== null) {
      // Acesso seguro ao purchaseForm
      // let value = this.purchaseForm.get('percentage').value
      // console.log(value);
      // ...
    }
    this.porcentagePayment.push(this.value);
    this.value = 0;
    console.dir(this.porcentagePayment, { depth: null });
    console.log('aqui');

    // let porc = document.getElementById('card-payment') as HTMLInputElement;
    // let value = porc.value;
    // this.cardsPayment.push(value)
    // value = '0';
    // console.log(`porc: ${value}`);


  }

  goTo(path: string) {
    this.router.navigate([`${path}/${this.id}`])
  }

  submit() {
    const { value } = this.purchaseForm;
    const id = this.route.snapshot.paramMap.get('id');

    let cart = {
      address_id: this.addressId,
      payment_cards: [{}]

    }

    for (let i = 0; i < this.cardsPayment.length; i++) {
      let payment_card = {
        payment_card_id: this.cardsPayment[i],
        percentage:this.porcentagePayment[i],
      }
      console.log(`aqui ${i}`);
      cart.payment_cards.push(payment_card);
    }
    cart.payment_cards.shift()
    localStorage.setItem('CARRINHO', JSON.stringify(cart))

    this.router.navigate([`/resumo/${id}`])
  }
}
