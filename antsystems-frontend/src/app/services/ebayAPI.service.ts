import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EbayAPIService {

  constructor(private http: HttpClient) { }

  public getData() {
    return this.http.get('')
  }
}
