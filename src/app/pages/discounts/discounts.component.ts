import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DiscountsService } from '../../@core/mock/discounts-service';

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
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
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
      created_at: {
        title: 'Created On',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  constructor(private service: DiscountsService) {
    // const data = this.service.getData();
    // this.source.load(data);
    this.service.getTableData().subscribe(response => {
      this.source.load(response.data);
    });
  }

}
