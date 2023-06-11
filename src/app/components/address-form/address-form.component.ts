import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IAddress } from 'src/app/interfaces/Address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {
  @Input() btnText!: string;
  @Input() data: IAddress | null = null;
  @Output() onSubmit = new EventEmitter<IAddress>()
  addressForm!: FormGroup;
  id!: string | null;

  constructor(
    private addressService: AddressService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.addressForm = new FormGroup({
      street: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      district: new FormControl('', [Validators.required]),
      zip_code: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
    })
    this.id = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : ''
    this.addressService.getAddress(this.id).subscribe(((data: any) => {
      this.addressForm = new FormGroup({
        street: new FormControl(data.street, [Validators.required]),
        number: new FormControl(data.number, [Validators.required]),
        district: new FormControl(data.district, [Validators.required]),
        zip_code: new FormControl(data.zip_code, [Validators.required]),
        city: new FormControl(data.city, [Validators.required]),
        state: new FormControl(data.state, [Validators.required]),
      })
    }),(err: any) => {
      console.log(`erro: ${err.error.message}`);
    })
  }

  submit() {
    const { value, valid } = this.addressForm;
    this.onSubmit.emit(value)
    console.log(`data: ${value}`);
  }

  getCEP(){
    const cep = this.zip_code.value;
    console.log(cep, "CEEEEP")
    this.addressService.searchCEP(cep).subscribe((data) => this.setValuesForm(data))
  }

  setValuesForm(data: any){
    this.street.setValue(data.logradouro);
    this.district.setValue(data.bairro);
    this.city.setValue(data.localidade);
    this.state.setValue(data.uf);
  }

  get street() {
    return this.addressForm.get('street')!;
  }
  get number() {
    return this.addressForm.get('number')!;
  }
  get district() {
    return this.addressForm.get('district')!;
  }
  get zip_code() {
    return this.addressForm.get('zip_code')!;
  }
  get city() {
    return this.addressForm.get('city')!;
  }
  get state() {
    return this.addressForm.get('state')!;
  }

}
