import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMenuComponent } from './all-menu/all-menu.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        redirectTo: 'all-menu'
      },
      {
        path: 'all-menu',
        component: AllMenuComponent,
        data: {
          title: 'Dashboard'
        }
      },
      
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
