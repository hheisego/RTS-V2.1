import { Component, OnInit } from '@angular/core';
import { TestapiService } from 'src/app/APIs/testapi.service'; //API service!



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


  
  source: Array<any> = this.customerList;
    
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

    columns: Array<any> = [
      {
        header: 'Nombre',
        field: 'Nombre'
      },
      {
        header: 'Domicilio',
        field: 'Domicilio'
      },
      {
        header: 'CP',
        field: 'CP'
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

}
