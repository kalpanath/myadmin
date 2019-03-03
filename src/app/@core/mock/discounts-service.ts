
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class DiscountsService  {
  data = [];
  constructor(private _http: Http) {}
  getTableData() {
    const path = environment.ApiUrl + `getAllDiscounts`;
    return this._http.post(path,{})
      // return this._http.get(AppConfig.API_URL + AppConfig.FRONT_END.JUMP_PAGES_DATA + pageSlug,)
      .map((response) => {
        //  console.log(response);
        return response.json();
      });
  }
}
