import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISignup } from 'src/app/interfaces/Singup';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  @Input() btnText!: string;
  @Input() data: ISignup | null = null;
  @Output() onSubmit = new EventEmitter<ISignup>()

  signupForm!: FormGroup;


  constructor(){}

  ngOnInit():void{
    this.signupForm =  new FormGroup({
      id: new FormControl(this.data ? this.data.id : '', [Validators.required]),
      name: new FormControl(this.data ? this.data.name : '', [Validators.required, Validators.min(2)]),
      CPF: new FormControl(this.data ? this.data.CPF : '', [Validators.required, Validators.minLength(11)]),
      phone: new FormControl(this.data ? this.data.phone : '', [Validators.required, Validators.minLength(11)]),
      email: new FormControl(this.data ? this.data.email : '', [Validators.required, Validators.email]),
      password: new FormControl(this.data ? this.data.password : '', [Validators.required, Validators.min(8)]),
      image: new FormControl(this.data ? this.data.image : ''),
    })
  }

  get name () {
    return this.signupForm.get('name')!;
  }

  get CPF () {
    return this.signupForm.get('CPF')!;
  }

  get phone () {
    return this.signupForm.get('phone')!;
  }

  get email () {
    return this.signupForm.get('email')!;
  }

  get password () {
    return this.signupForm.get('password')!;
  }

  onFileSelected(event: any){
    const file: File = event.target.files[0];
    this.signupForm.patchValue({
      image: file
    })
  }

  submit(){
    const {value, valid} = this.signupForm;
      localStorage.setItem('0', JSON.stringify(value));
      this.onSubmit.emit(value)
      console.log(`data: ${value}`);
  }

}
