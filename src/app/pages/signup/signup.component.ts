import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISignup } from 'src/app/interfaces/Singup';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  btnText: string = "Registrar";
  message: string = '';

  constructor(private userService: UserService, private router: Router){}

  async createHandler(signup: ISignup){
    console.dir(signup, {depth: null});


    // const formData = new FormData();

    // formData.append('name', signup.name);
    // formData.append('CPF', signup.CPF);
    // formData.append('phone', signup.phone);
    // formData.append('email', signup.email);
    // formData.append('password', signup.password);

    // if(signup.image){
    //   formData.append('image', signup.image)
    // }

    await this.userService.createUser(signup).subscribe((data: any) => {
      console.log(`Sucesso! ${data}`);
      localStorage.setItem('user', JSON.stringify(data))
      this.message = 'Cadastro feito com sucesso!';
      // this.router.navigate([`/perfil/${data.id}`])
      this.router.navigate([`/login`])
    },((err: any) => {
      console.dir(`falhou: ${err.error.message}`, {depth: null});
      this.message = err.error.message
    }))

  }

}
