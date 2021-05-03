import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./forgot.component.scss'],
  templateUrl: './forgot.component.html',
})
export class ForgotComponent {
  constructor(
     private router:Router,private route: ActivatedRoute

  ) {}
}
 
