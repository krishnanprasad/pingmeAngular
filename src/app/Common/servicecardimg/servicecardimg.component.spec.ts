import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecardimgComponent } from './servicecardimg.component';

describe('ServicecardimgComponent', () => {
  let component: ServicecardimgComponent;
  let fixture: ComponentFixture<ServicecardimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicecardimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecardimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
