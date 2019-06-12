import { Component, OnInit, Input } from '@angular/core';
import { User } from './addr.model';

@Component({
  selector: 'app-addr',
  templateUrl: './addr.component.html',
  styleUrls: ['./addr.component.css']
})
export class AddrComponent implements OnInit {

  @Input('user') user : User
  @Input('title') userTitle : string
  toggleCollapsed : boolean = true
  constructor() { 

  }

  toggleCollapse()
  {
    this.toggleCollapsed = !this.toggleCollapsed
  }

  ngOnInit() {
    
  }
}
