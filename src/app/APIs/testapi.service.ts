import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestapiService {

  readonly APIUrl = "https://ready2solve.club:5008/api"

  constructor(private http:HttpClient) { }

  getCustomerList():Observable<any[]>{
            
  return this.http.get<any>(this.APIUrl + '/clientes')

  }

  addCustomer(valedor:any){

  return this.http.post<any>(this.APIUrl + '/clientes', valedor)

  }

  updateCustomer(idmaster:any, valedor:any){

    //console.log(this.APIUrl + '/clientes/' + idmaster)
  return this.http.put<any>(this.APIUrl + '/clientes/' + idmaster, valedor)

  }

  deleteCustomer(valedor:any){
    
  //similar al update ay luego lo modifico
  return this.http.put<any>(this.APIUrl + '/clientes', valedor)

  }

}
