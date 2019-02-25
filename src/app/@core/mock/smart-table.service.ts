
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SmartTableService  {

  data = [];
  constructor(private _http: Http) {}
  getTableData() {
    return this._http.get('https://floristsapi.mobikasa.net/home?country_shortcode=us&langauge_code=en&cart_key=8cb672389daeeebc05186a6820c539f9bd1d54255a27a281400f3adedd1973b1&utm_source=&utm_medium=&utm_campaign=&utm_term=&utm_content=')
      // return this._http.get(AppConfig.API_URL + AppConfig.FRONT_END.JUMP_PAGES_DATA + pageSlug,)
      .map((response) => {
        return response.json()
      });

    // return this.data;
  }
}