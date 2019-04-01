import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateDiscountComponent } from './update-discount.component';

const routes: Routes = [{
  path: '',
  component: UpdateDiscountComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UpdateDiscountRoutingModule { }
export const routedComponents = [
    UpdateDiscountComponent,
];
