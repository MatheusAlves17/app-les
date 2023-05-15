import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAddress } from 'src/app/interfaces/Address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.css']
})
export class NewAddressComponent {

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
  }

  getAddressById() {
    const urlId = this.route.snapshot.paramMap.get('id');
    this.id = urlId ? urlId : '';
    this.addressService.getAddress(this.id).subscribe((data: any) => {
      this.data = data;
    })
  }

  submit(event: any) {

    this.addressService.createAddress(event).subscribe((data: any) => {
      this.router.navigate([`/enderecos/${this.id}`])
    }, (err: any) => {
      console.log(`fail: ${err}`);
    })
  }

}
