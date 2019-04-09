import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DiscountsService } from '../../@core/mock/discounts-service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-discount',
  templateUrl: './discounts.component.html',
  styles: [`
  nb-card {
    transform: translate3d(0, 0, 0);
  }
`],
})
export class DiscountsComponent {

  settings = {
    actions: false,
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    //   confirmCreate: true,
    // },
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    //   confirmSave: true,

    // },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   confirmDelete: true,
    // },
    
    columns: {
      coupon_code: {
        title: 'Discount Code',
        type: 'number',
      },
      discount_amount: {
        title: 'Amount',
        type: 'string',
      },
      start_date: {
        title: 'Start Date',
        type: 'string',
      },
      end_date: {
        title: 'End Date',
        type: 'string',
      },
      edit: {
        title: 'Edit',
        type: 'html',
        valuePrepareFunction:(cell,row)=>{
          return '<a title="See Detail Product "href="pages/update-discount/'+row.id+'"> <i class="ion-edit"></i></a>'
          },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  
  constructor(private service: DiscountsService,private router: Router) {
    // const data = this.service.getData();
    // this.source.load(data);
    console.log(this.router.url);

    this.service.getTableData().subscribe(response => {

      
      this.source.load(response.data);
    });
  }
 
  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      this.service.updateDiscountCode(event.newData,"local_data").subscribe(response => {
        // this.VendorData = response.data;
       });
       event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log(event.data);
      this.service.deleteDiscountCode(event.data,"local_data").subscribe(response => {
        // this.VendorData = response.data;
       });
       event.confirm.resolve(event.data);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
     // this.vendor_id = this.route.snapshot.paramMap.get('vendorid');
      this.service.addDiscountCode(event.newData,"local_data").subscribe(response => {
       // this.VendorData = response.data;
      });
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }


}
