import { Component, OnInit } from '@angular/core';
import { TestapiService } from 'src/app/APIs/testapi.service'; //API service!
import { GuiColumn, GuiPaging } from '@generic-ui/ngx-grid';


@Component({
  selector: 'app-testgrid2',
  templateUrl: './testgrid2.component.html',
  styleUrls: ['./testgrid2.component.css']
})
export class Testgrid2Component implements OnInit {

  constructor(private service:TestapiService) { }

  customerList:any=[];

  getRefreshCliList(){

    this.service.getCustomerList().subscribe(data=>{
    this.customerList =  data;

      


    console.log(this.customerList);
    });
  }  
  
  ngOnInit(): void {
  
    this.getRefreshCliList();
    
  }


    
  /*
  source: Array<any> = [
    {
      name: 'Brad',
      job: 'programmer',
      age: '40'
    },
    {
      name: 'John',
      job: 'athlete',
      age: '22'
    },
    {
      name: 'Eve',
      job: 'artist',
      age: '25'
    }];
*/

loading = true;
rowSelection = true;
paging: GuiPaging = {
  enabled: true,
  page: 1,
  pageSize: 10,
  pageSizes: [10, 25, 50],
  pagerTop: true,
  pagerBottom: true
};

    columns: Array<any> = [
      {
        header: 'Nombre',
        field: 'Nombre',
        width: 180
      },
      {
        header: 'Domicilio',
        field: 'Domicilio'
      },
      {
        header: 'CP',
        field: 'CP',
        width: 50
      },
      {
        header: 'Telefono',
        field: 'Telefono'
      },
      {
        header: 'Contacto',
        field: 'Contacto'
      },
      {
        header: 'CURP',
        field: 'CURP'
      },
      {
        header: 'CFDI',
        field: 'CFDI'
      },
      {
        header: 'Email',
        field: 'Email'
      },
      {
        header: 'Notas',
        field: 'Notas'
      },
      {
        header: 'RFC',
        field: 'RFC'
      },
      {
        header: 'Credito',
        field: 'Dias_Credito'
      },
      {
        header: 'Empresa',
        field: 'id_Empresa'
      
      }];



      source: Array<any> = this.customerList;


}
