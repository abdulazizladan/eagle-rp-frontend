import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'Eagle RP | Login'
  },
  {
    path: "admin",
    loadChildren: () => import("./users/admin/admin.module").then(module => module.AdminModule),
    title: 'Eagle RP | Admin'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
