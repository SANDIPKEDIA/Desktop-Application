import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CusListComponent } from './customer-list/customer-list.component';


const routes: Routes = [
  // {
  //   path: '',
  //   data: {
  //     title: 'CRM'
  //   },
    // children: [
      {
        path: '',
        redirectTo: 'customer-list'
      },
      {
        path: 'customer-list',
        component: CusListComponent,
        data: {
          title: 'CRM'
        }
      },
      
    
    ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
