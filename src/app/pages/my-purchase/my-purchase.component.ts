import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-purchase',
  templateUrl: './my-purchase.component.html',
  styleUrls: ['./my-purchase.component.css']
})
export class MyPurchaseComponent {

  constructor(
    private router: Router
  ){}

  goTo(id: string){
    this.router.navigate([`/devolucao/${id}`])
  }

}
