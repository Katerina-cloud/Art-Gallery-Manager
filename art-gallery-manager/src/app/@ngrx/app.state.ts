import { Piece } from '../inventory/types/Piece';


export interface AppState {​
  readonly inventory: InventoryState
}​

export interface InventoryState {​
  inventory: Piece[];
  loading: boolean;
  error: Error;
  editablePiece: Piece;
  currentPieceProfile: Piece;
  currentPieceTransaction: Piece;
}​
  
export const initialInventoryState: InventoryState = {​
  inventory: [],
  loading: false,
  error: null,
  editablePiece: null,
  currentPieceProfile: null,
  currentPieceTransaction: null
};