
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class BookingsService  {
  data = [];
  constructor(private _http: Http) {}
  getTableData() {
    const path = environment.ApiUrl + `getBookings`;
    return this._http.post(path,{})
      // return this._http.get(AppConfig.API_URL + AppConfig.FRONT_END.JUMP_PAGES_DATA + pageSlug,)
      .map((response) => {
        return response.json();
      });
  }
}
