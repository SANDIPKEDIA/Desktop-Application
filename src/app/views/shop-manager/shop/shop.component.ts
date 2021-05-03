import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { UsersService } from '../../../users.service';
// import {
//   NbComponentStatus,
//   NbGlobalLogicalPosition,
//   NbGlobalPhysicalPosition,
//   NbGlobalPosition,
//   NbToastrService,
//   NbToastrConfig,
// } from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'ngx-shop',
  styleUrls: ['./shop.component.scss'],
  templateUrl: './shop.component.html',
})
export class ShopComponent {

  public customerList=[];
  myReactiveForm: FormGroup;

  constructor(
    // private user: UsersService,private toastrService: NbToastrService,   
     private router:Router,private route: ActivatedRoute

  ) {}


  ngOnInit() {
  }


}
  
  


