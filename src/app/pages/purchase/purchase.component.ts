import { CardService } from 'src/app/services/card.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {

  id: string | null = '';
  token: string = '';

  formPayment: any = [{id: 'input1', name: 'input1', value: ''}];
  formPaymentOptions: any;
  formPaymentMessage: string = '';

  addressOptions: any;
  addressMessage: string = '';

  constructor(
    private router: Router,
    private cardService: CardService,
    private addressService: AddressService
  ){}

  ngOnInit(){
    this.getAllCards();
    this.getAllAddress();
    const user = localStorage.getItem('user');
    const data = user ? JSON.parse(user) : '';
    this.id = data.id;

  }

  addFormPayment() {
    const novoInput = { id: `input${this.formPayment.length + 1}`, name: `input${this.formPayment.length + 1}`, value: '' };
    this.formPayment.push(novoInput);
  }

  getAllAddress(){
    this.addressService.getAllAddress().subscribe((data: any) => {
      this.addressOptions = data.results;
      console.log(`achados: ${data}`);

      if(data.results.length === 0){
        this.addressMessage = 'Parece que você não cadastrou nenhum endereço'
      }
    })
  }
  getAllCards(){
    this.cardService.getAllCards().subscribe((data: any) => {
      this.formPaymentOptions = data.results;
      if(data.results.length === 0){
        this.formPaymentMessage = 'Parece que você não cadastrou nenhum método de pagamento'
      }
    })
  }

  submit(){
    this.router.navigate(['/resumo'])
  }

  goTo(path: string){
    this.router.navigate([`${path}/${this.id}`])
  }

}
