import { createAction, props } from '@ngrx/store';
import { Piece } from '../inventory/types/Piece';

// loadInventory----------------------------------------------
export const loadInventory_InventoryPage = createAction(
  '[InventoryPage] Load Inventory'
);

export const loadInventorySuccess_InventoryPage = createAction(
  '[InventoryPage] Load Inventory Success',
  props<{ inventory: Piece[] }>()
);

export const loadInventoryFailure_InventoryPage = createAction(
  '[InventoryPage] Load Inventory Failure',
  props<{ error: Error }>()
);

// filterInventory----------------------------------------------
export const filterInventory_InventoryPage = createAction(
  '[InventoryPage] Filter Inventory',
  props<{ title: string }>()
);

export const filterInventorySuccess_InventoryPage = createAction(
  '[InventoryPage] Filter Inventory Success',
  props<{ inventory: Piece[] }>()
);

export const filterInventoryFailure_InventoryPage = createAction(
  '[InventoryPage] Filter Inventory Failure',
  props<{ error: Error }>()
);

// getById----------------------------------------------
export const getById_EditInfo = createAction(
  '[EditInfo] Get By Id',
  props<{ id: number }>()
);

export const getByIdSuccess_EditInfo = createAction(
  '[EditInfo] Get By Id Success',
  props<{ editablePiece: Piece }>()
);

export const getByIdFailure_EditInfo = createAction(
  '[EditInfo] Get By Id Failure',
  props<{ error: Error }>()
);

export const getById_PieceProfile = createAction(
  '[PieceProfile] Get By Id',
  props<{ id: number }>()
);

export const getByIdSuccess_PieceProfile = createAction(
  '[PieceProfile] Get By Id Success',
  props<{ currentPieceProfile: Piece }>()
);

export const getByIdFailure_PieceProfile = createAction(
  '[PieceProfile] Get By Id Failure',
  props<{ error: Error }>()
);

export const getById_TransactionForm = createAction(
  '[TransactionForm] Get By Id',
  props<{ id: number }>()
);

export const getByIdSuccess_TransactionForm = createAction(
  '[TransactionForm] Get By Id Success',
  props<{ currentPieceTransaction: Piece }>()
);

export const getByIdFailure_TransactionForm = createAction(
  '[TransactionForm] Get By Id Failure',
  props<{ error: Error }>()
);

// save form--------------------------------------------
export const editPiece_EditInfo = createAction(
  '[EditInfo] Edit Piece', props<{ piece: Piece }>()
);

export const editPieceSuccess_EditInfo = createAction(
  '[EditInfo] Edit Piece Success', props<{ editablePiece: Piece }>()
);

export const editPieceFailure_EditInfo = createAction(
  '[EditInfo] Edit Piece Failure', props<{ error: Error }>()
);

export const editPiece_TransactionForm = createAction(
  '[TransactionForm] Edit Piece', props<{ piece: Piece }>()
);

export const editPieceSuccess_TransactionForm = createAction(
  '[TransactionForm] Edit Piece Success', props<{ currentPieceTransaction: Piece }>()
);

export const editPieceFailure_TransactionForm = createAction(
  '[TransactionForm] Edit Piece Failure', props<{ error: Error }>()
);