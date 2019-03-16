/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbAuthModule, NbPasswordAuthStrategy, NbAuthSimpleToken } from '@nebular/auth';
import { NgxAuthModule } from './pages/auth/auth.module';
import { AuthGuard } from './auth-guard.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    NgxAuthModule,
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://api.kuchbhioncall.com/public',
          login: {
            // ...
            endpoint: '/adminlogin',
          },
              token: {
                class: NbAuthSimpleToken,
                key: 'token',
              },         
        }),
      ],
      forms: {},
    }), 
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard,
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
