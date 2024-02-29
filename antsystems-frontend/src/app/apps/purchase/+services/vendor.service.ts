import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendor } from '../+models/vendor.models';
import { ApiService } from 'src/app/apps/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  baseUrl = "api/vendors"

  constructor(private http: HttpClient, private api: ApiService) { }

  get() {
    return this.api.get(this.baseUrl);
  }

  add(item: Vendor) {
    return this.http.post(this.baseUrl, item);
  }

  update(item: Vendor) {
    return this.http.patch(this.baseUrl, item);
  }

  delete(id: string) {
    return this.http.delete(this.baseUrl);
  }
}
