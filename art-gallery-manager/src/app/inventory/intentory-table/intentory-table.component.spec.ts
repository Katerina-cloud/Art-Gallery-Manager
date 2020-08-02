import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentoryTableComponent } from './intentory-table.component';

describe('IntentoryTableComponent', () => {
  let component: IntentoryTableComponent;
  let fixture: ComponentFixture<IntentoryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntentoryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
