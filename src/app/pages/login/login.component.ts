import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;
  message: string = '';

  constructor(
    private router: Router
  ){}

  ngOnInit():void{
    this.loginForm =  new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  get email () {
    return this.loginForm.get('email')!;
  }

  get password () {
    return this.loginForm.get('password')!;
  }


  submit(){
    const {value, valid} = this.loginForm;
    if(valid){
      this.message = 'Redirecionando';
      // autenticação
      this.router.navigate(['/home'])
    }
  }


}
