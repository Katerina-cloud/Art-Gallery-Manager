import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-piece',
  templateUrl: './search-piece.component.html',
  styleUrls: ['./search-piece.component.scss'],
})
export class SearchPieceComponent implements OnInit {
  title: string;
  @Output() filterPiece = new EventEmitter<string>();
  @ViewChild('pieceSearchForm', { static: true }) pieceSearchForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.filterPiece.emit(form.value.title);
  }
}
