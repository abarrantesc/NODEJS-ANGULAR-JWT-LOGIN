import { Routes } from '@angular/router';
import {PrivateTaskComponent} from '../../pages/private-task/private-task.component'
import {UsersComponent} from '../../pages/users/users.component';

import { AuthGuard } from '../../services/auth.guard';

 export const AdminLayoutRoutes: Routes = [
    { path: 'listTasks', component: PrivateTaskComponent},
    { path: 'users', component: UsersComponent},

];
