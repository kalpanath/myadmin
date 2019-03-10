import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/mock/smart-table.service';

@Component({
  selector: 'ngx-vendors',
  templateUrl: './vendors.component.html',
  styles: [`
  nb-card {
    transform: translate3d(0, 0, 0);
  }
`],
})
export class VendorsComponent {

  settings = {
    actions: false,
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   confirmDelete: true,
    // },
    columns: {
      user_name: {
        title: 'User Name',
        type: 'number',
      },
      contact_name: {
        title: 'Name',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      mobile: {
        title: 'Mobile',
        type: 'string',
      },
      city: {
        title: 'City',
        type: 'string',
      },
      pin_code: {
        title: 'Pin',
        type: 'number',
      },
      edit: {
        title: 'Edit',
        type: 'html',
        valuePrepareFunction:(cell,row)=>{
          return '<a title="See Detail Product "href="pages/update-vendor/'+row.id+'"> <i class="ion-edit"></i></a>'
          },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  constructor(private service: SmartTableService) {
    // const data = this.service.getData();
    // this.source.load(data);
    this.service.getTableData().subscribe(response => {
     // console.log(response.result);
      this.source.load(response.data);
    });
  }

}
