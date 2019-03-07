import { NgModule } from '@angular/core';
import { DiscountsComponent } from './discounts.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: DiscountsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class DiscountsRoutingModule { }
export const routedComponents = [
  DiscountsComponent,
];
