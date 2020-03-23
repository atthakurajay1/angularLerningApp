import { Component, ViewEncapsulation } from '@angular/core';
import { IMenuItem } from './interfaces/router-state.interface';
import { Observable } from 'rxjs';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuList: Array<IMenuItem> = [
    {
      url: "/configuration/userCreate", menuName: "Create User Profile", data: {}
    },
    {
      url: "/configuration/userList", menuName: "User List", data: {}
    },
    {
      url: "/configuration/userDashboard", menuName: "User Dashboard", data: {}
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}

