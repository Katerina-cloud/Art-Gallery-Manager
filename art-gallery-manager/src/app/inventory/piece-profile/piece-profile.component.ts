import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Piece } from '../types/Piece';
import { Store, select } from '@ngrx/store';​
import { AppState } from '../../@ngrx/app.state';
import { Observable } from 'rxjs';
import * as InventoryActions from '../../@ngrx/inventory.actions';

@Component({
  selector: 'app-piece-profile',
  templateUrl: './piece-profile.component.html',
  styleUrls: ['./piece-profile.component.scss']
})
export class PieceProfileComponent implements OnInit {
  piece: Piece;
  showSellDate = true;
  showLoanStartDate = true;
  showLoanEndDate = true;
  showCustomer = true;
  piece$: Observable<Piece>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    const idFromUrl = this.route.snapshot.params.id;
    // this.piece = this.accountsService.getById(Number(id));

    // 1.слушаем:
    this.piece$ = this.store.pipe(select(store => store.inventory.editablePiece));

    // 2. Нужно editablePiecе заполнить картиной найденной по id из url, для этого диспатчим action getById, который вызовет action getByIdSuccess и запишет найденный по id елемент в state? свойство  editablePiece
    this.store.dispatch(InventoryActions.getById_EditInfo({ id : idFromUrl }));

    // 3. Достаем piece из Observable.  this.showNeededData(this.piece.status) вызываем внутри subscribe, так как piece нам будет доступен, только после получения из Observable (async)
    this.piece$.subscribe(piece => {
      this.piece = piece;
      if(this.piece){
        this.showNeededData(this.piece.status);
      }
    });  
  }

  showNeededData(status: string): void {
    if(status === "available") {
      this.showSellDate = false;
      this.showLoanStartDate = false;
      this.showLoanEndDate = false;
      this.showCustomer = false;
    } else if(status === "sold") {
      this.showSellDate = true;
      this.showLoanStartDate = false;
      this.showLoanEndDate = false;
      this.showCustomer = true;
    } else if(status === "loaned out") {
      this.showSellDate = false;
      this.showLoanStartDate = true;
      this.showLoanEndDate = true;
      this.showCustomer = true;
    }
  }

  isAvailable(piece: Piece): boolean {
    return piece.status === "available";
  }

  formatCatchDate(date) {
    if (date) {
      const catchData = new Date(date);
      const day = "0" + catchData.getDate();
      const month = "0" + (catchData.getMonth() + 1);
      const year = catchData.getFullYear();

      return `${day.substr(-2)}.${month.substr(-2)}.${year}`;
    }
  }

  getBgImg(pieceId: number): object {
    return { 
      'background-image': `linear-gradient(105deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.7) 50%, transparent 50%), 
                          url(../../../assets/pieces/${pieceId}.png)`,
      'background-size': 'cover'
      };
  }
}
