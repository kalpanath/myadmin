import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';
import { ThemeModule } from '../../@theme/theme.module';
import { DiscountsRoutingModule, routedComponents } from './discounts-routing.module';
import { DiscountsComponent } from './discounts.component';
import { DiscountsService } from '../../@core/mock/discounts-service';


@NgModule({
  imports: [
    ThemeModule,
    HttpModule,
    DiscountsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents, DiscountsComponent,
  ], providers: [DiscountsService],

})
export class DiscountsModule { }
