import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ChargesService } from '../../@core/mock/charges-service';

@Component({
  selector: 'ngx-vendors',
  styleUrls: ['./charges.component.scss'],
  templateUrl: './charges.component.html',
})
export class ChargesComponent {

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
      type: {
        title: 'Type',
        type: 'String',
      },
      charges: {
        title: 'Charges',
        type: 'number',
      },
      created_at: {
        title: 'Created At',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  constructor(private service: ChargesService) {
    // const data = this.service.getData();
    // this.source.load(data);
    this.service.getTableData().subscribe(response => {
   // console.log(response.data);
      this.source.load(response.data);
    });
  }


  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
           console.log(event.data);
     // event.confirm.resolve();
    } else {
      //event.confirm.reject();
    }
  }

}
