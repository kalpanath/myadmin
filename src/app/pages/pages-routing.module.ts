import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'iot-dashboard',
    component: DashboardComponent,
  },
  {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  },
  {
    path: 'vendors',
    loadChildren: './vendors/vendors.module#VendorsModule',
  },
  {
    path: 'bookings',
    loadChildren: './bookings/bookings.module#BookingsModule',
  },
  {
    path: 'discounts',
    loadChildren: './discounts/discounts.module#DiscountsModule',
  },
  {
    path: 'charges',
    loadChildren: './charges/charges.module#ChargesModule',
  },
  {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
