import { Component, OnInit ,Input} from '@angular/core';
import {ApiServicesService} from '../../services/api-services.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

declare var M:any;
declare var $:any;

@Component({
  selector: 'app-private-task',
  templateUrl: './private-task.component.html',
  styleUrls: ['./private-task.component.scss']
})
export class PrivateTaskComponent implements OnInit {

  constructor(private services:ApiServicesService,private router: Router) { }

  tasksList: any;

  ngOnInit(): void {

     $('.modal').modal();
     $('select').formSelect();
     $('.trigger-modal').modal();

    
    this.getTasks();
  }

  getTasks(){
      this.services.getTaks().subscribe(res=>{
      this.tasksList = res.data
     },
     err =>{
       console.log(err)
     })
  }

}
