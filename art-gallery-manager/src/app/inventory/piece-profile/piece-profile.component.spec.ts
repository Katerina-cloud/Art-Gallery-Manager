import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceProfileComponent } from './piece-profile.component';

describe('PieceProfileComponent', () => {
  let component: PieceProfileComponent;
  let fixture: ComponentFixture<PieceProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieceProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
