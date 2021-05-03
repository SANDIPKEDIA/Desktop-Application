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
  selector: 'ngx-all-menu',
  styleUrls: ['./all-menu.component.scss'],
  templateUrl: './all-menu.component.html',
})
export class AllMenuComponent {

  public customerList=[];
  myReactiveForm: FormGroup;

  constructor(
    // private user: UsersService,private toastrService: NbToastrService,
    private router:Router,private route: ActivatedRoute
  ) {}


  ngOnInit() {
}


customer(){
  this.router.navigate(["/customer/customer-list"], { relativeTo: this.route })

}
inventory(){
  this.router.navigate(["/inventory"], { relativeTo: this.route })

}
reporting(){
  this.router.navigate(["/analytic/analytics"], { relativeTo: this.route })

}
stock(){
  this.router.navigate(["/stock/stock-manager"], { relativeTo: this.route })

}

profile(){
  this.router.navigate(["/shop/shop-manager"], { relativeTo: this.route })

}
  
}

