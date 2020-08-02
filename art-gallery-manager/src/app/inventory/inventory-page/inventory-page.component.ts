import { Component, OnInit } from '@angular/core';
import { Piece } from '../types/Piece';
import { AccountsService } from '../accounts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';​
import { AppState } from '../../@ngrx/app.state';
import * as InventoryActions from '../../@ngrx/inventory.actions';


@Component({
  selector: 'app-inventory-page',
  templateUrl: './inventory-page.component.html',
  styleUrls: ['./inventory-page.component.scss']
})

export class InventoryPageComponent implements OnInit {
  pieces: Piece[] = [];
  querySubscription: Subscription;
  searchTitle: string;
  view = "gallery";
  galleryActive = true;
  listActive = false;
  inventory$: Observable<Piece[]>;

  constructor(private accountsService: AccountsService, private route: ActivatedRoute,
    private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
        this.searchTitle = queryParam['pieceTitle'];
        if (this.searchTitle) {
          this.store.dispatch(InventoryActions.filterInventory_InventoryPage({ title : this.searchTitle }));
        } else {
          this.store.dispatch(InventoryActions.loadInventory_InventoryPage());
        }
      }
    );
    this.inventory$ = this.store.pipe(select(store => store.inventory.inventory));
  }

  toggleView(viewType: string): void {
    this.view = viewType;
    if (viewType === "gallery") {
      this.galleryActive = true;
      this.listActive = false;
    } else if (viewType === "list") {
      this.galleryActive = false;
      this.listActive = true;
    }
  }

  inventoryPageSearchOnClick(pieceTitle: string): void {
    if (!pieceTitle) {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/'], { queryParams: { pieceTitle } });
    }
  }
}
