import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidTableComponent } from './bid-table.component';

describe('BidTableComponent', () => {
  let component: BidTableComponent;
  let fixture: ComponentFixture<BidTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
