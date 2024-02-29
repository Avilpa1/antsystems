import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PurchaseOrder } from '../+models/purchase-order.models';
import { ApiService } from 'src/app/apps/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  baseUrl = "api/purchase"

  constructor(private http: HttpClient, private api: ApiService) { }

  get() {
    return this.api.get(this.baseUrl);
  }

  add(item: PurchaseOrder) {
    return this.http.post(this.baseUrl, item);
  }

  update(item: PurchaseOrder) {
    return this.http.patch(this.baseUrl, item);
  }

  delete(id: string) {
    return this.http.delete(this.baseUrl);
  }
}
