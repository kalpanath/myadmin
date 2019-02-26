
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class SmartTableService  {
  data = [];
  constructor(private _http: Http) {}
  getTableData() {
    const path = environment.ApiUrl + `getServices/12`;
    return this._http.get(path)
      // return this._http.get(AppConfig.API_URL + AppConfig.FRONT_END.JUMP_PAGES_DATA + pageSlug,)
      .map((response) => {
        return response.json()
      });
  }
}
