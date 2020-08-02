import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PieceCardComponent } from './piece-card/piece-card.component';
import { PieceProfileComponent } from './piece-profile/piece-profile.component';
import { InventoryPageComponent } from './inventory-page/inventory-page.component';
import { BorderBoldDirective } from './border-style.directive';
import { BorderBottomDirective } from './border-style-bottom.directive';
import { SearchPieceComponent } from './search-piece/search-piece.component';
import { PokedexRoutingModule } from './inventory-routing.module';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { StatusStyleDirective } from './status-style.directive';
import { IntentoryTableComponent } from './intentory-table/intentory-table.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { EffectsModule } from '@ngrx/effects';
import { InventoryEffects } from '../@ngrx/inventory.effects';


@NgModule({
  declarations: [
    PieceCardComponent,
    PieceProfileComponent,
    InventoryPageComponent,
    BorderBoldDirective,
    BorderBottomDirective,
    SearchPieceComponent,
    EditInfoComponent,
    StatusStyleDirective,
    IntentoryTableComponent,
    TransactionFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokedexRoutingModule,
    EffectsModule.forFeature([InventoryEffects])​
  ],
  exports: [
    PieceProfileComponent,
    InventoryPageComponent,
  ]
})
export class PokedexModule { }
