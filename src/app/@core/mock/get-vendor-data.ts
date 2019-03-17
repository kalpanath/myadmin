
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class GetVendor  {
  data = [];
  constructor(private _http: Http) {}
  getTableData(vendor_id) {
    const path = environment.ApiUrl + `getVendorProfile`;
    return this._http.post(path,{"vendor_id":vendor_id})
      // return this._http.get(AppConfig.API_URL + AppConfig.FRONT_END.JUMP_PAGES_DATA + pageSlug,)
      .map((response) => {
        return response.json();
      });
  }

  UpdateVendorProfile(vdata,token) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',

      })
    };
    const path = environment.ApiUrl + `UpdateVendorProfile`;
      return this._http.post(path, vdata, JSON.stringify(httpOptions))
      .map((response) => {
        return response.json();
      });
  }


}
