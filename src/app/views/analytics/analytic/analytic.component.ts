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
  selector: 'ngx-analytic',
  styleUrls: ['./analytic.component.scss'],
  templateUrl: './analytic.component.html',
})
export class AnalyticComponent {

  public customerList=[];
  myReactiveForm: FormGroup;

  constructor(
    // private user: UsersService,private toastrService: NbToastrService,   
     private router:Router,private route: ActivatedRoute

  ) {}


  ngOnInit() {
  }


  account(){
    this.router.navigate(["/pages/inventory/account"], { relativeTo: this.route })
  
  }
  regular(){
    this.router.navigate(["/pages/inventory/regular-inventory"], { relativeTo: this.route })
  
  }
  reporting(){
    this.router.navigate(["/pages/inventory/reporting"], { relativeTo: this.route })
  
  }
  manual(){
    this.router.navigate(["/pages/inventory/manual-inventory"], { relativeTo: this.route })
  
  }
  
  ladger(){
    this.router.navigate(["/pages/inventory/ladger"], { relativeTo: this.route })
  
  }
    
  ladgerbook(){
    this.router.navigate(["/pages/inventory/ladgerbook"], { relativeTo: this.route })
  
  }
}
  
  


