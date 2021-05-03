import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./login.component.scss'],

  templateUrl: 'login.component.html'
})
export class LoginComponent {
  constructor(
     private router:Router,private route: ActivatedRoute

  ) {}
  login(){
    this.router.navigate(["/home/all-menu"], { relativeTo: this.route })

  }
  forgot(){
    this.router.navigate(["/forgot"], { relativeTo: this.route })

  }
 }
