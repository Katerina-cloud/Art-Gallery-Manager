import { Action, createReducer, on } from '@ngrx/store';
import { InventoryState, initialInventoryState } from './app.state';​
import * as InventoryActions from './inventory.actions';​
import { Piece } from '../inventory/types/Piece';

export const inventoryReducerFeatureKey = 'inventoryReducer';

export const reducer = createReducer(
  initialInventoryState,

  // loadInventory----------------------------------------------
  on(InventoryActions.loadInventory_InventoryPage, state => {​
    console.log('loadInventory_InventoryPage action being handled!');​
    return { 
      ...state,
      loading: true
    };​
  }),

  on(InventoryActions.loadInventorySuccess_InventoryPage, (state, { inventory }) => {​
    console.log('loadInventorySuccess action being handled!');​
    return { 
      ...state,
      inventory,
      loading: false
     };​
  }),

  on(InventoryActions.loadInventoryFailure_InventoryPage, (state, { error }) => {​
    console.log('loadInventoryFailure action being handled!');​
    return { 
      ...state,
      loading: false,
      error
    };​
  }),


  // filterInventory----------------------------------------------
  on(InventoryActions.filterInventory_InventoryPage, state => {​
    console.log('filterInventory_InventoryPage action being handled!');​
    return { 
      ...state,
      loading: true
    };​
  }),

  on(InventoryActions.filterInventorySuccess_InventoryPage, (state, { inventory }) => {​
    console.log('filterInventorySuccess_InventoryPage action being handled!');​
    return { 
      ...state,
      inventory,
      loading: false
     };​
  }),

  on(InventoryActions.filterInventoryFailure_InventoryPage, (state, { error }) => {​
    console.log('filterInventoryFailure_InventoryPage action being handled!');​
    return { 
      ...state,
      loading: false,
      error
    };​
  }),


  // getById----------------------------------------------
  on(InventoryActions.getById_EditInfo, state => {​
    console.log('getById_EditInfo action being handled!');​
    return { 
      ...state,
      loading: true
    };​
  }),

  on(InventoryActions.getByIdSuccess_EditInfo,  (state, { editablePiece }) => {​
    console.log('getByIdSuccess_EditInfo action being handled!');​
    return { 
      ...state,
      editablePiece,
      loading: false
    };​
  }),

  on(InventoryActions.getByIdFailure_EditInfo, (state, { error }) => {​
    console.log('getByIdFailure_EditInfo action being handled!');​
    return { 
      ...state,
      loading: false,
      error
    };​
  }),

  on(InventoryActions.getById_PieceProfile, state => {​
    console.log('getById_PieceProfile action being handled!');​
    return { 
      ...state,
      loading: true
    };​
  }),

  on(InventoryActions.getByIdSuccess_PieceProfile,  (state, { currentPieceProfile }) => {​
    console.log('getByIdSuccess_PieceProfile action being handled!');​
    return { 
      ...state,
      currentPieceProfile,
      loading: false
    };​
  }),

  on(InventoryActions.getByIdFailure_PieceProfile, (state, { error }) => {​
    console.log('getByIdFailure_PieceProfile action being handled!');​
    return { 
      ...state,
      loading: false,
      error
    };​
  }),

  on(InventoryActions.getById_TransactionForm, state => {​
    console.log('getById_TransactionForm action being handled!');​
    return { 
      ...state,
      loading: true
    };​
  }),

  on(InventoryActions.getByIdSuccess_TransactionForm,  (state, { currentPieceTransaction }) => {​
    console.log('getById_TransactionForm action being handled!');​
    return { 
      ...state,
      currentPieceTransaction,
      loading: false
    };​
  }),

  on(InventoryActions.getByIdFailure_TransactionForm, (state, { error }) => {​
    console.log('getById_TransactionForm action being handled!');​
    return { 
      ...state,
      loading: false,
      error
    };​
  }),

  on(InventoryActions.editPiece_EditInfo, state => {​
    console.log('editPiece_EditInfo action being handled!');​
    return { 
      ...state,
      loading: true
    };​
  }),

  on(InventoryActions.editPieceSuccess_EditInfo, (state, { editablePiece }) => {​
    console.log('editPieceSuccess_EditInfo action being handled!');​
    
    let pieceToUpdate = {...editablePiece};
    if(state.inventory.length) {
      pieceToUpdate = state.inventory.find(p => {
        if (p.id === editablePiece.id) {
          return true;
        }
      })
      Object.assign(pieceToUpdate, editablePiece);
    }
    return { 
      ...state,
      inventory: [...state.inventory, pieceToUpdate]
     };​
  }),

  on(InventoryActions.editPieceFailure_EditInfo, (state, { error }) => {​
    console.log('editPieceSuccess_EditInfo action being handled!');​
    return { 
      ...state,
      loading: false,
      error
    };​
  }),

  on(InventoryActions.editPiece_TransactionForm, state => {​
    console.log('editPiece_TransactionForm action being handled!');​
    return { 
      ...state,
      loading: true
    };​
  }),

  on(InventoryActions.editPieceSuccess_TransactionForm, (state, { currentPieceTransaction }) => {​
    console.log('editPieceSuccess_TransactionForm action being handled!');​
    const pieceToUpdate: Piece = state.inventory.find(p => {
      if (p.id === currentPieceTransaction.id) {
        return true;
      }
    })
    Object.assign(pieceToUpdate, currentPieceTransaction);
    return { 
      ...state,
      inventory: [...state.inventory, pieceToUpdate]
     };​
  }),

  on(InventoryActions.editPieceFailure_TransactionForm, (state, { error }) => {​
    console.log('editPieceSuccess_TransactionForm action being handled!');​
    return { 
      ...state,
      loading: false,
      error
    };​
  })

);

export function inventoryReducer(state: InventoryState | undefined, action: Action) {​
  return reducer(state, action);​
}

export const selectInventory = (state: InventoryState) => state.inventory;
// export const getInventoryState = createFeatureSelector<AppState>('inventory');
