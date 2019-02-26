import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../@core/mock/smart-table.service';

@Component({
  selector: 'ngx-vendors',
  templateUrl: './vendors.component.html',
  styles: [`
  nb-card {
    transform: translate3d(0, 0, 0);
  }
`]
})
export class VendorsComponent {

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
      image: {
        title: 'Image',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  constructor(private service: SmartTableService) {
    // const data = this.service.getData();
    // this.source.load(data);
    this.service.getTableData().subscribe(response =>{
      console.log(response.result);
      this.source.load(response.result);
    })
  }

}
