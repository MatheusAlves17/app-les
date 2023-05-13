import { Component } from '@angular/core';
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

  constructor(private userService: UserService){}

  async createHandler(signup: ISignup){
    const formData = new FormData();

    formData.append('name', signup.name);
    formData.append('CPF', signup.CPF);
    formData.append('phone', signup.phone);
    formData.append('email', signup.email);
    formData.append('password', signup.password);

    if(signup.image){
      formData.append('image', signup.image)
    }

    await this.userService.createUser(formData).subscribe((data: any) => {
      console.log(`sucesso! ${data}`);
      this.message = data;

    })

  }

}
