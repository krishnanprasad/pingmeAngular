import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPingComponent } from './add-ping.component';

describe('AddPingComponent', () => {
  let component: AddPingComponent;
  let fixture: ComponentFixture<AddPingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
