import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';
import { ThemeModule } from '../../../@theme/theme.module';
import { FormsModule } from '@angular/forms';
import { UpdateDiscountComponent } from './update-discount.component';
import { UpdateDiscountRoutingModule , routedComponents} from './update-discount-routing.module';
import { DiscountsService } from '../../../@core/mock/discounts-service';
import { NbDatepickerModule } from '@nebular/theme';
import { NbMomentDateModule } from '@nebular/moment';

@NgModule({
  imports: [
    ThemeModule,
    HttpModule,
    UpdateDiscountRoutingModule,
    Ng2SmartTableModule,
    NbDatepickerModule,
    NbMomentDateModule,
    FormsModule,
  ],
  declarations: [
    ...routedComponents, UpdateDiscountComponent,
  ], providers: [DiscountsService],

})
export class UpdateDiscountModule { }
