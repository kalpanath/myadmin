import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { BookingsService } from '../../@core/mock/bookings-service';

@Component({
  selector: 'ngx-vendors',
  templateUrl: './bookings.component.html',
  styles: [`
  nb-card {
    transform: translate3d(0, 0, 0);
  }
`],
})
export class BookingsComponent {

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
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      service: {
        title: 'Service',
        type: 'string',
      },
      address: {
        title: 'Address',
        type: 'string',
      },
      rcv_date: {
        title: 'Date',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  constructor(private service: BookingsService) {
    // const data = this.service.getData();
    // this.source.load(data);
    this.service.getTableData().subscribe(response => {
    console.log(response.data);
      this.source.load(response.data);
    });
  }

}
