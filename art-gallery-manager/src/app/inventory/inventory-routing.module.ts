import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PieceProfileComponent } from './piece-profile/piece-profile.component';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { CanDeactivateGuard } from './edit-info/can-deactivate-guard.service';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { AuthGuard } from '../auth.guard';

const appRoutes: Routes = [
  { path: 'inventory/:id', component: PieceProfileComponent },
  { path: 'inventory/:id/edit', component: EditInfoComponent, pathMatch: 'full', canDeactivate: [CanDeactivateGuard], canActivate: [AuthGuard] },
  { path: 'inventory/transaction-form', component: TransactionFormComponent, pathMatch: 'full', canDeactivate: [CanDeactivateGuard], canActivate: [AuthGuard] },
  { path: 'inventory/:id/transaction-form', component: TransactionFormComponent, pathMatch: 'full', canDeactivate: [CanDeactivateGuard], canActivate: [AuthGuard] }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
