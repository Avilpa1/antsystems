import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarrierComponent } from './add-carrier.component';

describe('AddCarrierComponent', () => {
  let component: AddCarrierComponent;
  let fixture: ComponentFixture<AddCarrierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCarrierComponent]
    });
    fixture = TestBed.createComponent(AddCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
