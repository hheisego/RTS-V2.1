import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Testgrid2Component } from './HHcomponents/testgrid2/testgrid2.component';

const routes: Routes = [{path:'clientes',component:Testgrid2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
