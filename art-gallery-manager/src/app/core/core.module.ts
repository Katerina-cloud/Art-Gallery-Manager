import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from '../core/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [NavbarComponent, LoginComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule
  ],
  exports: [NavbarComponent]
})
export class CoreModule { }
