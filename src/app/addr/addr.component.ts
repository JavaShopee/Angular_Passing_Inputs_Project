import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-addr',
  templateUrl: './addr.component.html',
  styleUrls: ['./addr.component.css']
})
export class AddrComponent implements OnInit {

  user : any
  @Input('title') userTitle : string
  constructor() { 

  }

  ngOnInit() {
    this.user = {
       title : this.userTitle,
       designation :'Software Engineer',
       address : '1213 New GreenBoro Drive, New York, NY , USA',
       phone : [
         '123-234-3456',
         '345-456-5678',
         '567-789-9876',
       ]
    }
  }
}
