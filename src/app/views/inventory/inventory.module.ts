import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardRoutingModule } from './inventory-routing.module';
import { AllInventoryComponent } from './all-inventory/all-inventory.component';
import { AccountComponent } from './account/account.component';
import { RegularIndventoryComponent } from './regular-inventory/regular-inventory.component';
import { ManualIndventoryComponent } from './manual-inventory/manual-inventory.component';
import { LadgerComponent } from './ladger/ladger.component';
import { ReportingComponent } from './reporting/reporting.component';
import { LedgerBookComponent } from './ledger-book/ledger-book.component';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ AllInventoryComponent,AccountComponent,RegularIndventoryComponent,ManualIndventoryComponent,LadgerComponent,ReportingComponent,LedgerBookComponent ]
})
export class InventoryModule { }
