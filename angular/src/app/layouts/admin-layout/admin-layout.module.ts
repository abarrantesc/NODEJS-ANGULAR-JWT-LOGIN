import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {PrivateTaskComponent} from '../../pages/private-task/private-task.component'
import { AdminLayoutRoutes } from './admin-layout.routing';
import { SidenavModule } from '../../sidenav/sidenav.module'

import { AuthGuard } from '../../services/auth.guard';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SidenavModule
  ],
  declarations: [
    PrivateTaskComponent
    ],
  providers: [ AuthGuard],

})

export class AdminLayoutModule { }
