import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ManualIndventoryComponent } from './manual-inventory/manual-inventory.component';
import { AllInventoryComponent } from './all-inventory/all-inventory.component';
import { RegularIndventoryComponent } from './regular-inventory/regular-inventory.component';
import { LadgerComponent } from './ladger/ladger.component';
import { ReportingComponent } from './reporting/reporting.component';
import { LedgerBookComponent } from './ledger-book/ledger-book.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Inventory'
    },
    children:[
      {
        path: '',
        redirectTo: 'all-inventory'
      },
  {
    path: 'all-inventory',
    component: AllInventoryComponent,
    data: {
      title: 'Inventory Menu'
    }
  },
  {
    path: 'account',
    component: AccountComponent,
    data: {
      title: 'Account'
    }
  },
  {
    path: 'reporting',
    component: ReportingComponent,
    data: {
      title: 'Reporting'
    }
  },
  {
    path: 'ladger',
    component: LadgerComponent,
    data: {
      title: 'Ladger'
    }
  },
  {
    path: 'ladger-book',
    component: LedgerBookComponent,
    data: {
      title: 'Ladger Book'
    }
  },
  {
    path: 'regular-indventory',
    component: RegularIndventoryComponent,
    data: {
      title: 'Regular Indventory'
    }
  },
  {
    path: 'manual-inventory',
    component: ManualIndventoryComponent,
    data: {
      title: 'Manual Indventory'
    }
  }
]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
