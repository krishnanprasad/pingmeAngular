import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitCardComponent } from './chit-card.component';

describe('ChitCardComponent', () => {
  let component: ChitCardComponent;
  let fixture: ComponentFixture<ChitCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
