import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'antsystems';

  constructor(
    public http: HttpClient) {}

  ngOnInit(): any {}

  getOrders(): any {
    this.http.get('/api/orders').subscribe((res: any) => {
      console.warn(res);
      this.title = res;
    });
  }

  createNewOrder(): any {
    const body = {
      vendor: 'Vendor 123',
      carrier: 'Carrier 123'
    };
    this.http.post('/api/orders', body).subscribe((res: any) => {
      console.warn(res);
      this.title = res.test;
    });
  }
}
