import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DiscountsService } from '../../../@core/mock/discounts-service';
import { ActivatedRoute } from '@angular/router';
import { NbDateService } from '@nebular/theme';

@Component({
  selector: 'ngx-update-discount',
  templateUrl: './update-discount.component.html',
  styleUrls: ['./update-discount.component.scss']
})
export class UpdateDiscountComponent implements OnInit {
  public dis_id: string;
  min: Date;
  max: Date;
  DiscountData = {};
  ngOnInit() {
  }

  source: LocalDataSource = new LocalDataSource();
  constructor(protected dateService: NbDateService<Date>,private route: ActivatedRoute,private service: DiscountsService) {
    // const data = this.service.getData();
    // this.source.load(data);
   
    this.dis_id = this.route.snapshot.paramMap.get('discountid');
    this.service.getDiscountData(this.dis_id).subscribe(response => {
     // this.source.load(response.data);
     
     var start_date = new Date(response.data.start_date);
     var end_date = new Date(response.data.end_date);
     delete response.data.start_date;
     response.data.start_date=start_date;

     delete response.data.end_date;
     response.data.end_date=end_date;
     
     this.DiscountData = response.data;
     
    });
  }

  UpdateDiscountData(vdata,local_data) {
    // console.log(local_data.value);
    this.dis_id = this.route.snapshot.paramMap.get('discountid');
    this.service.updateDiscountCode(this.DiscountData,local_data).subscribe(response => {
      this.DiscountData = response.data;
    });
    // console.log("test"+JSON.stringify(vdata));
   }
}
