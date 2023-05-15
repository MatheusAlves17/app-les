import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;
  message: string = '';

  constructor(
    private router: Router,
    private userService: UserService
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
    console.log(value);

    if(valid){
      this.userService.login(value).subscribe((data: any) => {
        this.message = 'Redirecionando';
        console.log(`sucesso! ${data}`);
        localStorage.setItem('user', JSON.stringify(data.user))
        localStorage.setItem('token', JSON.stringify(data.access_token))
        // this.router.navigate(['/home'])
        this.router.navigate([`/perfil/${data.user.id }`])
      }, (err: any) =>{
        console.log(`erro: ${err.error.message}`);
        this.message = err.error.message;
      })
    }
  }


}
