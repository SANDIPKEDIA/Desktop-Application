import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent} from './shop/shop.component';


const routes: Routes = [
  
  {
    path: 'shop-manager',
    component: ShopComponent,
    data: {
      title: 'Shop Manager'
    }
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}
