import { Component } from '@angular/core';
import { InventoryService } from './inventory.service';
import { InventoryRepository } from './+state/inventory.repository';
import { ItemRepository } from './+state/item.repository';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  constructor(
    private inventoryService: InventoryService, 
    public inventoryRepo: InventoryRepository,
    public itemRepo: ItemRepository) {
    // this.inventoryService.getProducts().subscribe()
    this.inventoryRepo.fetchData().subscribe()
    this.itemRepo.fetchData().subscribe()

  }
}
