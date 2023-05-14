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
    const urlId = this.route.snapshot.paramMap.get('id')
    this.id = urlId ? urlId : ''
    this.userService.getUser(this.id).subscribe((data: any) => {
      this.data = data;
    })
  }

  async submit(data: ISignup){

    const id = this.data.id;

    const formData = new FormData();

    formData.append('name', data.name)
    formData.append('phone', data.phone)
    formData.append('password', data.password)

    if(data.image){
      formData.append('image', data.image)
    }

    await this.userService.updateUser(id, formData).subscribe((data: any) => {
      console.log(`atualizado com sucesso! ${data}`);
      this.message = "Dados atualizados com sucesso!"
      this.router.navigate([`/perfil/${id}`])

    })

    console.log(`event: ${event}`);

  }


}
