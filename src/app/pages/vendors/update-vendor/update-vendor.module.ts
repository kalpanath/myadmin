import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';
import { ThemeModule } from '../../../@theme/theme.module';
import { UpdateVendorComponent } from './update-vendor.component';
import { UpdateVendorsRoutingModule , routedComponents} from './update-vendors-routing.module';
import { GetVendor } from '../../../@core/mock/get-vendor-data';
import { FormsModule } from '@angular/forms';
import { NbDatepickerModule } from '@nebular/theme';


@NgModule({
  imports: [
    ThemeModule,
    HttpModule,
    UpdateVendorsRoutingModule,
    Ng2SmartTableModule,
    NbDatepickerModule,
    FormsModule,
  ],
  declarations: [
    ...routedComponents, UpdateVendorComponent,
  ], providers: [GetVendor],

})
export class UpdateVendorModule { }
