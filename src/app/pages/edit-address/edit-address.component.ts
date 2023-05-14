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
  btnText: string = 'Editar';

  address!: IAddress;
  id: string = '';

  constructor(
    private addressService: AddressService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const urlId = this.route.snapshot.paramMap.get('id');
    this.id = urlId ? urlId : '';

    this.addressService.getAddress(this.id).subscribe((data: any) => {
      console.log(`recebidos: ${data}`);
      this.address = data;
    })
  }

  submit(event: any) {
    console.log(`event: ${event}`);

  }

}
