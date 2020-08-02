import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InventoryPageComponent } from './inventory/inventory-page/inventory-page.component';

const appRoutes: Routes = [
  { path: '', component: InventoryPageComponent },
  { path: 'inventory', component: InventoryPageComponent, pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
