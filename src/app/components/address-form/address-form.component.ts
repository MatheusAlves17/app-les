import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAddress } from 'src/app/interfaces/Address';

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


  constructor(){}

  ngOnInit():void{
    this.addressForm =  new FormGroup({
      id: new FormControl(this.data ? this.data.id : '', [Validators.required]),
      street: new FormControl(this.data ? this.data.street : '', [Validators.required]),
      number: new FormControl(this.data ? this.data.number : '', [Validators.required]),
      district: new FormControl(this.data ? this.data.district : '', [Validators.required]),
      zip_code: new FormControl(this.data ? this.data.zip_code : '', [Validators.required]),
      city: new FormControl(this.data ? this.data.city : '', [Validators.required]),
      state: new FormControl(this.data ? this.data.state : '', [Validators.required]),
    })
  }
  submit(){
    const {value, valid} = this.addressForm;
      localStorage.setItem('0', JSON.stringify(value));
      this.onSubmit.emit(value)
      console.log(`data: ${value}`);
  }

  get street () {
    return this.addressForm.get('street')!;
  }
  get number () {
    return this.addressForm.get('number')!;
  }
  get district () {
    return this.addressForm.get('district')!;
  }
  get zip_code () {
    return this.addressForm.get('zip_code')!;
  }
  get city () {
    return this.addressForm.get('city')!;
  }
  get state () {
    return this.addressForm.get('state')!;
  }

}

