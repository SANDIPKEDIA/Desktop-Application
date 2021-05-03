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
  selector: 'ngx-manual-inventory',
  styleUrls: ['./manual-inventory.component.scss'],
  templateUrl: './manual-inventory.component.html',
})
export class ManualIndventoryComponent {

  public customerList=[];
  myReactiveForm: FormGroup;

  constructor(
    // private user: UsersService,private toastrService: NbToastrService,   
     private router:Router,private route: ActivatedRoute

  ) {}


  ngOnInit() {
  }


  back(){
    this.router.navigate(["/inventory/all-inventory"], { relativeTo: this.route })
  
  }
  
  
}
  
  


