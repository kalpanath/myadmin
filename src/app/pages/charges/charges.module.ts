import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';
import { ThemeModule } from '../../@theme/theme.module';
import { ChargesRoutingModule, routedComponents } from './charges-routing.module';
import { ChargesComponent } from './charges.component';
import { ChargesService } from '../../@core/mock/charges-service';


@NgModule({
  imports: [
    ThemeModule,
    HttpModule,
    ChargesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents, ChargesComponent,
  ], providers: [ChargesService],

})
export class ChargesModule { }
