import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  avatarDefault!: any;
  id: string = '';

  constructor(
    private router: Router
  ){}

  ngOnInit():void{
    let user = localStorage.getItem('user');
    let data = user ? JSON.parse(user) : '';
    this.avatarDefault = data.name[0];
    this.id = data.id;
  }

  goTo(path: string){
    this.router.navigate([`/${path}/:${this.id}`])
  }

}
