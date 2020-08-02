import { Input, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Piece } from '../types/Piece';

@Component({
  selector: 'app-intentory-table',
  templateUrl: './intentory-table.component.html',
  styleUrls: ['./intentory-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntentoryTableComponent implements OnInit {
  @Input() pieces: Piece[] = [];
  @Input() piece: Piece;

  constructor() { }

  ngOnInit(): void {
  }

  isAvailable(piece: Piece): boolean {
    return piece.status === "available";
  }
}
