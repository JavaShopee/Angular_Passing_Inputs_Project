import { Component } from '@angular/core';
import { User } from './addr/addr.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'third-project';


  user : User
  constructor(){
      
    this.user  = new User();
    this.user.title =  "The Foo Company";
    this.user.address = "221 NJ"
    this.user.phone = ['233-23-3','2332-23-22']
    }
}
