import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from "../auth.guard";
import { UserDetailComponent } from './user-detail/user-detail.component';


const routes: Routes = [
  {path:'user/dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'user/detail/:id',component:UserDetailComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
