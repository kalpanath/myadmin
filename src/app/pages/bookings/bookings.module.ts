import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';
import { ThemeModule } from '../../@theme/theme.module';
import { VendorsRoutingModule, routedComponents } from './bookings-routing.module';
import { BookingsComponent } from './bookings.component';
import { BookingsService } from '../../@core/mock/bookings-service';


@NgModule({
  imports: [
    ThemeModule,
    HttpModule,
    VendorsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents, BookingsComponent,
  ], providers: [BookingsService],

})
export class BookingsModule { }
