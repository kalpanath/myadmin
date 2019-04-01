import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';
import { ThemeModule } from '../../@theme/theme.module';
import { DiscountsRoutingModule, routedComponents } from './discounts-routing.module';
import { DiscountsComponent } from './discounts.component';
import { DiscountsService } from '../../@core/mock/discounts-service';
import { UpdateDiscountComponent } from './update-discount/update-discount.component';
import { AddDiscountComponent } from './add-discount/add-discount.component';


@NgModule({
  imports: [
    ThemeModule,
    HttpModule,
    DiscountsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents, DiscountsComponent, UpdateDiscountComponent, AddDiscountComponent,
  ], providers: [DiscountsService],

})
export class DiscountsModule { }
