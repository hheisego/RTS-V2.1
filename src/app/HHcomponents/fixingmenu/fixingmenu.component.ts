import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixingmenu',
  templateUrl: './fixingmenu.component.html',
  styleUrls: ['./fixingmenu.component.css']
})
export class FixingmenuComponent implements OnInit {

  status: boolean = false;
  icon: string = "bi bi-layout-text-sidebar-reverse";
  
  constructor() { }

  ngOnInit(): void {
  }

}
