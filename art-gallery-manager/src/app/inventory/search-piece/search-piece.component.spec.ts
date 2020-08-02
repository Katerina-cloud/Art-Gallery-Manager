import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPieceComponent } from './search-piece.component';
import { FormsModule } from '@angular/forms';

fdescribe('SearchPieceComponent', () => {
  let component: SearchPieceComponent;
  let fixture: ComponentFixture<SearchPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SearchPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('raises the filterPiece event when clicked', async(() => {
    fixture.whenStable().then(() => {
      
      component.filterPiece.subscribe((pieceTitle: string) => {
        const title = component.pieceSearchForm.form.value.title;
        
        expect(pieceTitle).toBe(title);
      });

      component.onSubmit(component.pieceSearchForm);
    });
  }));
});
