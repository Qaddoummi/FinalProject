import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomerModule { }
