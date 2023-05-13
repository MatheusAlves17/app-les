import { Component } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {

  formPayment: any = [{id: 'input1', name: 'input1', value: ''}];

  addFormPayment() {
    const novoInput = { id: `input${this.formPayment.length + 1}`, name: `input${this.formPayment.length + 1}`, value: '' };
    this.formPayment.push(novoInput);
  }

}
