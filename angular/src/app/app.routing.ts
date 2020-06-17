import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {SignupComponent} from './pages/signup/signup.component';
export const AppRoutes: Routes = [
 
  {
    path: '',
    component: SignupComponent,
  },
   {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren:  () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)

     
      // loadChildren: 'src/app/layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
 
]
