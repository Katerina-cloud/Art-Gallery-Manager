import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AccountsService } from '../inventory/accounts.service';
import * as InventoryActions from './inventory.actions';


@Injectable()
export class InventoryEffects {

  @Effect() loadInventory_InventoryPage$ = this.actions$
  .pipe(
    ofType(InventoryActions.loadInventory_InventoryPage),
    switchMap(action =>​
      this.accountsService$​
        .getAll()​
        .then(inventory => InventoryActions.loadInventorySuccess_InventoryPage({ inventory }))​
        .catch(error => InventoryActions.loadInventoryFailure_InventoryPage({ error }))​
    )​
  )

  @Effect() filterInventory_InventoryPage$ = this.actions$
  .pipe(
    ofType(InventoryActions.filterInventory_InventoryPage),
    switchMap(action =>​
      this.accountsService$​
        .filterByTitle(action.title)​
        .then(inventory => InventoryActions.filterInventorySuccess_InventoryPage({ inventory }))​
        .catch(error => InventoryActions.filterInventoryFailure_InventoryPage({ error }))​
    )​
  )

  @Effect() getById_EditInfo$ = this.actions$
  .pipe(
    ofType(InventoryActions.getById_EditInfo),
    switchMap(action =>​
      this.accountsService$​
        .getById(action.id)​
        .then(editablePiece => InventoryActions.getByIdSuccess_EditInfo({ editablePiece }))​
        .catch(error => InventoryActions.getByIdFailure_EditInfo({ error }))​
    )​
  )

  @Effect() getById_PieceProfile$ = this.actions$
  .pipe(
    ofType(InventoryActions.getById_PieceProfile),
    switchMap(action =>​
      this.accountsService$​
        .getById(action.id)​
        .then(currentPieceProfile => InventoryActions.getByIdSuccess_PieceProfile({ currentPieceProfile }))​
        .catch(error => InventoryActions.getByIdFailure_PieceProfile({ error }))​
    )​
  )

  @Effect() getById_TransactionForm$ = this.actions$
  .pipe(
    ofType(InventoryActions.getById_TransactionForm),
    switchMap(action =>​
      this.accountsService$​
        .getById(action.id)​
        .then(currentPieceTransaction => InventoryActions.getByIdSuccess_TransactionForm({ currentPieceTransaction }))​
        .catch(error => InventoryActions.getByIdFailure_TransactionForm({ error }))​
    )​
  )

  @Effect() editPiece_TransactionForm$ = this.actions$
  .pipe(
    ofType(InventoryActions.editPiece_TransactionForm),
    switchMap(action =>​
      this.accountsService$​
        .savePiece(action.piece)​
        .then(currentPieceTransaction => InventoryActions.editPieceSuccess_TransactionForm({ currentPieceTransaction }))​
        .catch(error => InventoryActions.editPieceFailure_TransactionForm({ error }))​
    )​
  )

  @Effect() editPiece_EditInfo$ = this.actions$
  .pipe(
    ofType(InventoryActions.editPiece_EditInfo),
    switchMap(action =>​
      this.accountsService$​
        .savePiece(action.piece)​
        .then(editablePiece => InventoryActions.editPieceSuccess_EditInfo({ editablePiece }))​
        .catch(error => InventoryActions.editPieceFailure_EditInfo({ error }))​
    )​
  )

  constructor(private actions$: Actions, private accountsService$: AccountsService) {}

}
