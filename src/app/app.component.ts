import { Component } from '@angular/core';
// decorator// pm = product management 
@Component({
  selector: 'pm-root', 
  templateUrl: './app.component.html'
    
})
export class AppComponent{
  pageTitle: string = "Rx Product Management";
}
  