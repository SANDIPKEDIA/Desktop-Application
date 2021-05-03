import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ForgotComponent } from './views/login/forgot-password/forgot.component';
import { IntroductionComponent } from './views/terms-conditions/introduction/introduction.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'introduction',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'forgot',
    component: ForgotComponent,
    data: {
      title: 'Forgot Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'introduction',
    component: IntroductionComponent,
    data: {
      title: 'Introduction Page'
    }
  },
  
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Menu'
    },
    children: [
      {
        path: 'home',
        loadChildren: () => import('./views/home/home.module').then(m => m.MenuModule)
      },
      {
        path: 'customer',
        loadChildren: () => import('./views/customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path: 'inventory',
        loadChildren: () => import('./views/inventory/inventory.module').then(m => m.InventoryModule)
      },
      {
        path: 'stock',
        loadChildren: () => import('./views/stock-manager/stock.module').then(m => m.StockModule)
      },
    
      {
        path: 'shop',
        loadChildren: () => import('./views/shop-manager/shop.module').then(m => m.ShopModule)
      },
      {
        path: 'analytic',
        loadChildren: () => import('./views/analytics/analytic.module').then(m => m.AnalyticModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
