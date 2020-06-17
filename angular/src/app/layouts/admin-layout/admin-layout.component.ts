import { Component, OnInit } from '@angular/core';
declare var M:any;
declare var $:any;

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
       M.AutoInit();
      //  var elems = document.querySelectorAll('.sidenav');
      //  var instances = M.Sidenav.init(elems);
       $('.sidenav').sidenav();

  }

}
