import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './HHcomponents/navbar/navbar.component';
import { SidebarComponent } from './HHcomponents/sidebar/sidebar.component';
import { MenuComponent } from './HHcomponents/sidebar/menu/menu.component';
import { Testgrid2Component } from './HHcomponents/testgrid2/testgrid2.component';
// import { AgGridModule } from 'ag-grid-angular'; resulto ser una mierda
import { GuiGridModule } from '@generic-ui/ngx-grid';
import { TestapiService } from './APIs/testapi.service'; //API service!
import { HttpClientModule } from '@angular/common/http' //API services
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FixingmenuComponent } from './HHcomponents/fixingmenu/fixingmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MenuComponent,
    Testgrid2Component,
    FixingmenuComponent  
  ],
  imports: [
    BrowserModule, AppRoutingModule, GuiGridModule, HttpClientModule, FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [TestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
