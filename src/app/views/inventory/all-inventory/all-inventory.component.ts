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
  selector: 'ngx-all-inventory',
  styleUrls: ['./all-inventory.component.scss'],
  templateUrl: './all-inventory.component.html',
})
export class AllInventoryComponent {

  public customerList=[];
  myReactiveForm: FormGroup;

  constructor(
    // private user: UsersService,private toastrService: NbToastrService,   
     private router:Router,private route: ActivatedRoute

  ) {}


  ngOnInit() {
  }


  account(){
    this.router.navigate(["/inventory/account"], { relativeTo: this.route })
  
  }
  regular(){
    this.router.navigate(["/inventory/regular-indventory"], { relativeTo: this.route })
  
  }
  reporting(){
    this.router.navigate(["/inventory/reporting"], { relativeTo: this.route })
  
  }
  manual(){
    this.router.navigate(["/inventory/manual-inventory"], { relativeTo: this.route })
  
  }
  
  ladger(){
    this.router.navigate(["/inventory/ladger"], { relativeTo: this.route })
  
  }
    
  ladgerbook(){
    this.router.navigate(["/inventory/ladger-book"], { relativeTo: this.route })
  
  }
}
  
  


