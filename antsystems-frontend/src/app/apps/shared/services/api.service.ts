import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    baseUrl: string = '';
    constructor(private http: HttpClient) { 
        this.baseUrl = environment.apiUrl;
    }

    get(path: string) {
        // return this.http.get(`${this.baseUrl}/${path}`)
        return this.http.get(`${path}`)

    }
}
