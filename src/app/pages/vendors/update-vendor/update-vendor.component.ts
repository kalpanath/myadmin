import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { GetVendor } from '../../../@core/mock/get-vendor-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-update-vendor',
  templateUrl: './update-vendor.component.html',
  styleUrls: ['./update-vendor.component.scss']
})

export class UpdateVendorComponent implements OnInit {
  public vendor_id: string;
  VendorData = {};
  //Services = "";
  ngOnInit() {
    var local_data = JSON.parse(localStorage.getItem('auth_app_token'));
   }
  source: LocalDataSource = new LocalDataSource();
  constructor(private route: ActivatedRoute,private service: GetVendor) {
    this.vendor_id = this.route.snapshot.paramMap.get('vendorid');
    this.service.getTableData(this.vendor_id).subscribe(response => {
      this.VendorData = response.data;
    });
  }


  UpdateVendorProfile(vdata,local_data) {
   // console.log(local_data.value);
   this.vendor_id = this.route.snapshot.paramMap.get('vendorid');
   this.service.UpdateVendorProfile(this.VendorData,local_data).subscribe(response => {
     this.VendorData = response.data;
   });
   // console.log("test"+JSON.stringify(vdata));
  }
  
}
