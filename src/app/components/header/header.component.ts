import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  avatarDefault!: any;

  ngOnInit():void{

    let user = localStorage.getItem('user')
    user = user ? JSON.parse(user) : ''

    // this.avatarDefault = user ? user.name[0] : '';


  }

}
