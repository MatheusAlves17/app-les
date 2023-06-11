import { CardService } from 'src/app/services/card.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { ICart } from 'src/app/interfaces/Cart';
import { CartService } from 'src/app/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {


  addressId: string = '';
  cardId: string = '';
  value: number = 0;

  id: string | null = '';
  token: string = '';

  formPaymentOptions: any;
  cardsPayment: string[] = [];
  formPaymentMessage: string = '';

  addressMessage: string = '';
  cardMessage: string = '';

  addressOptions: any;
  purchaseForm!: FormGroup;

  formPaymentOptionsSelected: Array<any> = [];
  paymentMethods: Array<any> = [];
  total: any = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cardService: CardService,
    private addressService: AddressService,
    private _snackBar: MatSnackBar

  ) { }

  ngOnInit() {
    this.getAllCards();
    this.getAllAddress();
    const user = localStorage.getItem('user');
    const data = user ? JSON.parse(user) : '';
    this.id = data.id;
    let total: any = localStorage.getItem('total')
    total = total ? JSON.stringify(total) : 0;
    total = parseInt(total)
    this.total = total
    console.log(typeof total, '+', typeof this.total);

  }

  selectOnListCard(): void {
    const selectOption = this.formPaymentOptions.find((item: any) => item.id == this.cardId);
    this.formPaymentOptionsSelected.push(selectOption);
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

  goTo(path: string) {
    this.router.navigate([`${path}/${this.id}`])
  }

  submit() {
    let items: any = [];
    const id = this.route.snapshot.paramMap.get('id');


    for (let i = 0; i < this.formPaymentOptionsSelected.length; i++) {
      let payment = {
        payment_card_id: this.formPaymentOptionsSelected[i].id,
        percentage: this.formPaymentOptionsSelected[i].value
      }
      items.push(payment)
    }

    localStorage.setItem('CART', JSON.stringify(items))
    localStorage.setItem('CART_ADDRESS', JSON.stringify(this.addressId))
    this.router.navigate([`/resumo/${id}`])
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}

