import { NgModule } from '@angular/core';
import { ChargesComponent } from './charges.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: ChargesComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ChargesRoutingModule { }
export const routedComponents = [
  ChargesComponent,
];
