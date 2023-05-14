import { Component } from '@angular/core';

@Component({
  selector: 'app-purchase-resume',
  templateUrl: './purchase-resume.component.html',
  styleUrls: ['./purchase-resume.component.css']
})
export class PurchaseResumeComponent {

  message: string = '';

  buy(){
    this.message = 'Compra finalizada! Acompanhe a entrega'
  }

}
