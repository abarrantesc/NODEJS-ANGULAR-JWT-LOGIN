import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $('ul li').on('click', function(){
          var clicked = $(this);
          $('ul li').each(function(){
              if($(this).hasClass('active')){
                  $(this).removeClass('active');
              }
          });
          $(this).addClass('active');
      });
  });
  }

}
