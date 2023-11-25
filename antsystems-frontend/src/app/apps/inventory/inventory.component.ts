import { Component } from '@angular/core';
import { InventoryService } from './inventory.service';
import { InventoryRepository } from './inventory.repository';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  constructor(private inventoryService: InventoryService, public inventoryRepo: InventoryRepository) {
    // this.inventoryService.getProducts().subscribe()
    this.inventoryRepo.fetchTodos().subscribe()
  }
}
