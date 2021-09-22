import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RTS-JS6';
  showFiller = false;
  icon: string = "bi bi-layout-text-sidebar-reverse";
  status: boolean = false;

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
