import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';


const routes: Routes = [
  
  {
    path: 'introduction',
    component: IntroductionComponent,
    data: {
      title: 'Introduction'
    }
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsRoutingModule {}
