import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { DeveloperModule } from './developer/developer.module';
import { InfluncerModule } from './influncer/influncer.module';

const routes: Routes = [
  {
    path: '',
    loadChildren : () => CustomerModule
  },
  {
    path: 'Admin',
    loadChildren : () => AdminModule
  },
  {
    path: 'Developer',
    loadChildren : () => DeveloperModule
  },
  {
    path: 'Influncer',
    loadChildren : () => InfluncerModule
  },
  {
    path: 'Auth',
    loadChildren : () => AuthModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
