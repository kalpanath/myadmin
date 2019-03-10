import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateVendorComponent } from './update-vendor.component';

const routes: Routes = [{
  path: '',
  component: UpdateVendorComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class UpdateVendorsRoutingModule { }
export const routedComponents = [
    UpdateVendorComponent,
];
