import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './item.models';
import { ApiService } from 'src/app/apps/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient, private api: ApiService) { }

  getItems() {
    // return this.http.get('api/items')
    return this.api.get('api/items')
  }

  addItem(item: Item) {
    return this.http.post('api/items', item)
  }
}
