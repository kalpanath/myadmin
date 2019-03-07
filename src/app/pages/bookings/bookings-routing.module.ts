import { NgModule } from '@angular/core';
import { BookingsComponent } from './bookings.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: BookingsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class VendorsRoutingModule { }
export const routedComponents = [
  BookingsComponent,
];
