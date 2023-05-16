import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  id: string | null = '';
  role: string | null = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit():void{
    this.id = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : '';
    const user = localStorage.getItem('user');
    const data = user ? JSON.parse(user) : '';
    this.role = data.role;
  }

  goTo(path: string){
    this.router.navigate([`${path}/${this.id}`])
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/home'])
  }

}
