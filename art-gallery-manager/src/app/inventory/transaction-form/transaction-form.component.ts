import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Piece } from '../types/Piece';
import { NgForm } from '@angular/forms';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs/internal/Observable';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../@ngrx/app.state';
import * as InventoryActions from '../../@ngrx/inventory.actions';


@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})

export class TransactionFormComponent implements OnInit, CanComponentDeactivate {
  piece: Piece;
  changesSaved = false;
  showSellDate = true;
  showLoanStartDate = false;
  showLoanEndDate = false;
  piece$: Observable<Piece>;

  constructor(private route: ActivatedRoute,
    private router: Router, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    const idFromUrl = this.route.snapshot.params.id;

    this.piece$ = this.store.pipe(select(store => store.inventory.currentPieceTransaction));
    this.store.dispatch(InventoryActions.getById_TransactionForm({ id: idFromUrl }));
    this.piece$.subscribe(piece => {
      this.piece = piece;
      if (this.piece) {
        this.showNeededData(this.piece.status);
      }
    });
  }

  showNeededData(status: string): void {
    if (status === "available") {
      this.showSellDate = false;
      this.showLoanStartDate = false;
      this.showLoanEndDate = false;
    } else if (status === "sold") {
      this.showSellDate = true;
      this.showLoanStartDate = false;
      this.showLoanEndDate = false;
    } else if (status === "loaned out") {
      this.showSellDate = false;
      this.showLoanStartDate = true;
      this.showLoanEndDate = true;
    }
  }

  formatCatchDate(date) {
    if (date) {
      const catchData = new Date(date);
      let day = "0" + catchData.getDate();
      let month = "0" + (catchData.getMonth() + 1);
      let year = catchData.getFullYear();

      return `${day.substr(-2)}.${month.substr(-2)}.${year}`;
    }
  }

  onSubmit(form: NgForm) {
    this.piece.title = form.value.title;
    this.piece.artist = form.value.artist;
    this.piece.medium = form.value.medium;
    this.piece.status = form.value.status;
    this.piece.retailPrice = form.value.retailPrice;
    this.piece.purchaseDate = form.value.purchaseDate;
    this.piece.boughtFrom = form.value.boughtFrom;
    this.piece.sellDate = form.value.sellDate;
    this.piece.loanStartDate = form.value.loanStartDate;
    this.piece.loanEndDate = form.value.loanEndDate;
    this.piece.customer = form.value.customer;

    this.changesSaved = true;

    this.router.navigate(['/inventory', this.piece.id]);
  }

  onCancel(): void {
    this.changesSaved = false;
    this.router.navigate(['/inventory', this.piece.id]);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.changesSaved) {
      return true;
    } else {
      return true;
    }
  }

  getBgImg(pieceId: number): object {
    return {
      'background-image': `linear-gradient(105deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.7) 50%, transparent 50%), 
                          url(../../../assets/pieces/${pieceId}.png)`,
      'background-size': 'cover'
    };
  }

  onSelectTransactionChange(event): any {
    let transactionType = event.target.value;
    if (transactionType === "sell") {
      this.showSellDate = true;
      this.showLoanStartDate = false;
      this.showLoanEndDate = false;
    } else if (transactionType === "loan") {
      this.showSellDate = false;
      this.showLoanStartDate = true;
      this.showLoanEndDate = true;
    }
  }

}
