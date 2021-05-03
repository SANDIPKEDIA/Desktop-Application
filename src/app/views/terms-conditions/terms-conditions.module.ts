import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { IntroductionComponent } from './introduction/introduction.component';
import { TermsRoutingModule } from './terms-conditions-routing.module';


@NgModule({
  imports: [
    FormsModule,
    TermsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ IntroductionComponent ]
})
export class ShopModule { }
