import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  data = [
    { title: 'Product Lower', icon: 'system_update_alt', products: 24, categories: 3, color: 'emergency' }, 
    { title: 'Product Expired Soon', icon: 'update', products: 4, categories: 3, color: 'emergency' },
    { title: 'Product Most Seller', icon: 'sell', products: 8, categories: 3, color: 'success' }, 
    { title: 'Product Back Order', icon: 'low_priority', products: 4, categories: 3, color: 'base' },
    { title: 'Product Stocked for 3mo', icon: 'orders', products: 4, categories: 3, color: 'warning' }, 
    { title: 'Product Overstock', icon: 'shelves', products: 4, categories: 3, color: 'warning' },
    { title: 'Product Damages', icon: 'warning', products: 4, categories: 3, color: 'warning' }, 
    { title: 'Product Over cost', icon: 'monetization_on', products: 4, categories: 3, color: 'emergency' },
  ]
}
