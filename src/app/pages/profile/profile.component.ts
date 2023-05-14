import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  id: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit():void{
    this.id = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : '';
  }

  goTo(){
    this.router.navigate([`editar-perfil/${this.id}`])
  }

}
