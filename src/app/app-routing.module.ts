import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoleComponent } from './role/role.component';
import { PermissionComponent } from './permission/permission.component';

const routes: Routes = [
  {path:'home', component: UserListComponent},
  {path:'role', component: RoleComponent},
  {path:'user-list', component: UserListComponent},
  {path:'permission', component: PermissionComponent},
  {path:'', redirectTo:'/user-list', pathMatch: 'full'},
  {path:'**', redirectTo:'/user-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 