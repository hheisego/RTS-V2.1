import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenav',
  templateUrl: './pagenav.component.html',
  styleUrls: ['./pagenav.component.css']
})
export class PagenavComponent implements OnInit {

  icon: string = "bi bi-layout-text-sidebar-reverse";
  status: boolean = false;
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
