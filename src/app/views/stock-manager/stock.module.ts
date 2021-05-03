import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock/stock.component';


@NgModule({
  imports: [
    FormsModule,
    StockRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ StockComponent ]
})
export class StockModule { }
