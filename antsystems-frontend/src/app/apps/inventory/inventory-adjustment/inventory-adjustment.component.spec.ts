import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAdjustmentComponent } from './inventory-adjustment.component';

describe('InventoryAdjustmentComponent', () => {
  let component: InventoryAdjustmentComponent;
  let fixture: ComponentFixture<InventoryAdjustmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryAdjustmentComponent]
    });
    fixture = TestBed.createComponent(InventoryAdjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
