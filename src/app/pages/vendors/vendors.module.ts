import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';
import { ThemeModule } from '../../@theme/theme.module';
import { VendorsRoutingModule, routedComponents } from './vendors-routing.module';
import { SmartTableService } from '../../@core/mock/smart-table.service';
import { VendorsComponent } from './vendors.component';


@NgModule({
  imports: [
    ThemeModule,
    HttpModule,
    VendorsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents, VendorsComponent,
  ], providers: [SmartTableService],

})
export class VendorsModule { }
