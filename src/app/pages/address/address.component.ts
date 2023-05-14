import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  constructor(
    private router: Router
  ){}

  goTo(id: string){
    this.router.navigate([`/editar-endereco/${id}`])
  }

}
