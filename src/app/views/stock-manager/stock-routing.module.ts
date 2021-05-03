import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './stock/stock.component';


const routes: Routes = [

  {
    path: 'stock-manager',
    component: StockComponent,
    data: {
      title: 'Stock Manager'
    }
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule {}
