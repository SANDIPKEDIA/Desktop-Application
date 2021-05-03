import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticComponent } from './analytic/analytic.component';


const routes: Routes = [
  {
    path: 'analytics',
    component: AnalyticComponent,
    data: {
      title: 'Analytics'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
