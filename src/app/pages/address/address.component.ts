import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAddress } from 'src/app/interfaces/Address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  id: string | null = '';
  address: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private addressService: AddressService
  ){}

  ngOnInit():void{
    this.id = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : '';
    this.getAllAddress()
  }

  getAllAddress(){
    this.addressService.getAllAddress().subscribe((data: any) => {
      console.log(`sucesso! ${data}`);
      this.address = data.results;
      console.log("aqui: "+this.address);

    }, (err: any) => {
      console.log(`erro: ${err.error.message}`);
    })
  }

  goToEditAddress(id: string){
      this.router.navigate([`/editar-endereco/${id}`])
  }

  goToNewAddress(){
      this.router.navigate([`/novo-endereco/${this.id}`])
  }

  delete(id: string){
    this.addressService.deleteAddress(id).subscribe((data: any) => {
      console.log(`excluido: ${data}`);
      this.getAllAddress()

    })
  }

}
