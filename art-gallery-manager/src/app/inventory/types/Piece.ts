export interface Piece {
  id: number;
  title: string;
  artist: string;
  medium: string;
  status: string;
  retailPrice: number;
  purchaseDate: string;
  boughtFrom: string;
  sellDate?: string;
  loanStartDate?: string;
  loanEndDate?: string;
  customer?: string;
}
