import { Input, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Piece } from '../types/Piece';


@Component({
  selector: 'app-piece-card',
  templateUrl: './piece-card.component.html',
  styleUrls: ['./piece-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieceCardComponent implements OnInit {
  @Input() piece: Piece;

  constructor() { }

  ngOnInit(): void {
  }

  isAvailable(piece: Piece): boolean {
    return piece.status === "available";
  }
}
