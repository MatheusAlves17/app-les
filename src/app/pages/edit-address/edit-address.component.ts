import { AddressService } from './../../services/address.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAddress } from 'src/app/interfaces/Address';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent {

  message: string = '';
  btnText: string = 'Salvar';

  data!: IAddress;
  id: string = '';

  constructor(
    private addressService: AddressService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAddressById();
  }

  getAddressById(){
    const urlId = this.route.snapshot.paramMap.get('id');
    this.id = urlId ? urlId : '';

    this.addressService.getAddress(this.id).subscribe((data: any) => {
      this.data = data;
      // localStorage.setItem('provisorio', JSON.stringify(this.data))
      // console.log(`recebido: ${this.data}`);
    })
  }

  submit(event: any) {
    console.log(`event: ${event}`);
    // if(this.data.street){
      return this.updateAddress(event);
    // }
    // else{
      // return this.createAddress(event);
    // }
  }

  createAddress(event: any){
    this.addressService.createAddress(event).subscribe((data: any) => {
      console.log(`sucesso! ${data}`);
      this.router.navigate([`/enderecos/${data.user_id}`])
    }, (err: any) => {
      console.log(`fail: ${err}`);
      // localStorage.setItem('address', JSON.stringify(err));
    })
  }

  updateAddress(event: any){
    this.addressService.updateAddress(this.id, event).subscribe((data: any) => {
      console.log(`sucesso! ${data}`);
      localStorage.removeItem('provisorio')
      this.router.navigate([`/enderecos/${this.id}`])

    }, (err: any) => {
      console.log(`erro: ${err.error.message}`);
    })
  }

}
