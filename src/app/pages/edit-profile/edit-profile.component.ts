import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ISignup } from 'src/app/interfaces/Singup';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  btnText: string = "Editar";
  message: string = "";
  data!: ISignup;
  id: string = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const userStorage = localStorage.getItem('user');
    const user = userStorage ? JSON.parse(userStorage) : ''
    this.data = user;
    console.log(`user: ${userStorage}`);

  }

  async submit(data: ISignup){
    console.log(`data: ${data}`);
    const id = this.route.snapshot.paramMap.get('id')

    // if(data.image){
    //   formData.append('image', data.image)
    // }

    await this.userService.updateUser(id, data).subscribe((data: any) => {
      console.log(`atualizado com sucesso! ${data}`);
      localStorage.setItem('user', JSON.stringify(data))
      this.message = "Dados atualizados com sucesso!"
      this.router.navigate([`/perfil/${id}`])

    })

    console.log(`event: ${event}`);

  }


}
