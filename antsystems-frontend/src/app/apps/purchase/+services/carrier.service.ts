import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrier } from '../+models/carrier.models';
import { ApiService } from 'src/app/apps/shared/services/api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarrierService {

  baseUrl = `${environment.apiUrl}/carriers`;

  constructor(private http: HttpClient, private api: ApiService) { }

  get() {
    return this.api.get(this.baseUrl);
  }

  add(item: Carrier) {
    return this.http.post(this.baseUrl, item);
  }

  update(item: Carrier) {
    return this.http.patch(`${this.baseUrl}/${item.id}`, item);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
