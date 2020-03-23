import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem } from "../../interfaces/router-state.interface";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

  @Input("menu-list")
  menuList: Array<IMenuItem> = [];

  onMenuItemClick(menuItem: IMenuItem): void {
    this.router.navigate([menuItem.url, menuItem.data]);
  }

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.menuList.length);
  }

  // public buttonClick(type: string): void {
  //   if (type == "CM") {
  //     this.cmbotton = true;
  //     this.pmbotton = false;
  //   }
  //   if (type == "PM") {
  //     this.cmbotton = false;
  //     this.pmbotton = true;
  //   }
  // }

}
