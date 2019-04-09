
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

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

  getDiscountData(id) {
    const path = environment.ApiUrl + `getDiscountData`;
    return this._http.post(path,{"coupon_code":id})
      // return this._http.get(AppConfig.API_URL + AppConfig.FRONT_END.JUMP_PAGES_DATA + pageSlug,)
      .map((response) => {
        return response.json();
      });
  }

  addDiscountCode(vdata,token) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',

      })
    };
    const path = environment.ApiUrl + `addDiscount`;
      return this._http.post(path, vdata, JSON.stringify(httpOptions))
      .map((response) => {
        return response.json();
      });
  }

  updateDiscountCode(vdata,token) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',

      })
    };
    const path = environment.ApiUrl + `updateDiscount`;
      return this._http.post(path, vdata, JSON.stringify(httpOptions))
      .map((response) => {
        return response.json();
      });
  }

  deleteDiscountCode(vdata,token) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',

      })
    };
    const path = environment.ApiUrl + `deleteDiscount`;
      return this._http.post(path, vdata, JSON.stringify(httpOptions))
      .map((response) => {
        return response.json();
      });
  }
}
