import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTablePaymentComponent } from './transaction-table-payment.component';

describe('TransactionTablePaymentComponent', () => {
  let component: TransactionTablePaymentComponent;
  let fixture: ComponentFixture<TransactionTablePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionTablePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTablePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
