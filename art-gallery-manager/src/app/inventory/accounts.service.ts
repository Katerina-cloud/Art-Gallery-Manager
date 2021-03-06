import { Injectable } from '@angular/core';
import { Piece } from './types/Piece';

@Injectable({
  providedIn: 'root'
})

export class AccountsService {

  constructor() { }
  pieces: Piece[] = [
    {
      "id": 1,
      "title": "Water Lilies",
      "artist": "Claude Monet",
      "medium": "oil on canvas",
      "status": "available",
      "purchaseDate": "2020-02-19T20:13:24.407Z",
      "retailPrice": 3000000,
      "boughtFrom": "Gallery LLC"
    },
    {
      "id": 2,
      "title": "Blue Dancers",
      "artist": "Edgar Degas",
      "medium": "pastel on paper",
      "status": "sold",
      "sellDate":"2020-07-19T20:13:24.407Z",
      "customer": "GMG Gallery",
      "retailPrice": 3000000,
      "purchaseDate": "2020-02-19T20:13:24.407Z",
      "boughtFrom": "Gallery LLC"
    },
    {
      "id": 3,
      "title": "The Demon Seated",
      "artist": "Mikhail Vrubel",
      "medium": "oil on canvas",
      "status": "loaned out",
      "retailPrice": 3000000,
      "purchaseDate": "2020-02-19T20:13:24.407Z",
      "boughtFrom": "Gallery LLC",
      "loanStartDate": "2020-03-19T20:13:24.407Z",
      "loanEndDate": "2020-04-19T20:13:24.407Z",
      "customer": "GMG Gallery"
    },
    {
      "id": 4,
      "title": "Swan Princess",
      "artist": "Mikhail Vrubel",
      "medium": "oil on canvas",
      "status": "available",
      "retailPrice": 3000000,
      "purchaseDate": "2020-02-19T20:13:24.407Z",
      "boughtFrom": "Gallery LLC"
    },
    {
      "id": 5,
      "title": "Faust",
      "artist": "Mikhail Vrubel",
      "medium": "oil on canvas",
      "status": "available",
      "retailPrice": 3000000,
      "purchaseDate": "2020-02-19T20:13:24.407Z",
      "boughtFrom": "Gallery LLC"
    },
    {
      "id": 6,
      "artist": "Gustav Klimt",
      "title": "Portrait of Adele Bloch-Bauer I",
      "medium": "oil on canvas",
      "status": "available",
      "retailPrice": 3000000,
      "purchaseDate": "2020-02-19T20:13:24.407Z",
      "boughtFrom": "Gallery LLC"
    },
    {
      "id": 7,
      "artist": "Gustav Klimt",
      "title": "The Kiss",
      "medium": "oil on canvas",
      "status": "available",
      "retailPrice": 3000000,
      "purchaseDate": "2020-02-19T20:13:24.407Z",
      "boughtFrom": "Gallery LLC"
    },
    {
      "id": 8,
      "artist": "Claude Monet",
      "title": "Woman with a Parasol",
      "medium": "oil on canvas",
      "status": "available",
      "retailPrice": 3000000,
      "purchaseDate": "2020-02-19T20:13:24.407Z",
      "boughtFrom": "Gallery LLC"
    },
    {
      "id": 9,
      "artist": "Vincent van Gogh",
      "title": "The Starry Night",
      "medium": "oil on canvas",
      "status": "available",
      "purchaseDate": "2020-02-19T20:13:24.407Z",
      "boughtFrom": "Gallery LLC",
      "retailPrice": 3000000
    },
    {
      "id": 10,
      "artist": "Unknown",
      "title": "Flowers",
      "medium": "oil on canvas",
      "status": "available",
      "purchaseDate": "2020-02-19T20:13:24.407Z",
      "boughtFrom": "Gallery LLC",
      "retailPrice": 3000000
    }
  ]

  getAll(): Promise<Piece[]> {
    return Promise.resolve(this.pieces);
  }

  filterByTitle(pieceTitle: string): Promise<Piece[]> {
    console.log(pieceTitle);
    const filteredInventory =  this.pieces.filter(piece => {
      if (piece.title.toLowerCase().includes(pieceTitle.toLowerCase())) {
        return piece;
      }
    });
    return Promise.resolve(filteredInventory);
  }

  getById(pieceId: number): Promise<Piece> {
    const pieceById: Piece = this.pieces.find(p => {
      if (p.id === Number(pieceId)) {
        return true;
      }
    })
    return Promise.resolve(pieceById);
  }

  savePiece(piece: Piece): Promise<Piece> {
    for (let i = 0; i < this.pieces.length; i++) {
      if(this.pieces[i].id === piece.id) {
        this.pieces[i] = {...piece};
        return Promise.resolve(this.pieces[i]);
      }
    }
  }
}
