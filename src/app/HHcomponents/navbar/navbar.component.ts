import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  status: boolean = false;
  icon: string = "bi bi-layout-text-sidebar-reverse";

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(){
    
    if(this.icon === 'bi bi-layout-text-sidebar-reverse'){
      this.icon = 'bi bi-layout-text-sidebar';
    } else {
      this.icon = "bi bi-layout-text-sidebar-reverse";
    }
    this.status = !this.status;  
    console.log("si se armo")
  }


}
