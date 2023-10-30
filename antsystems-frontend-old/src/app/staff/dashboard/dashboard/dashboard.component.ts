import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  poProcessing: any;
  poOnboarding: any;
  poDutyFees: any;
  poConfirmedToRelease: any;
  poReceived: any;
  poUnloading: any;
  poEmpty: any;
  poReceivedInSystem: any;

  constructor() {}

  ngOnInit(): void {
    this.poProcessing = { ...this.generateSeedData('PO Processing') };
    this.poOnboarding = { ...this.generateSeedData('PO Onboarding') };
    this.poDutyFees = { ...this.generateSeedData('PO Duty Fees') };
    this.poConfirmedToRelease = { ...this.generateSeedData("PO's Confirmed To Release") };
    this.poReceived = { ...this.generateSeedData("PO's Received") };
    this.poUnloading = { ...this.generateSeedData("PO's Unloading") };
    this.poEmpty = { ...this.generateSeedData("PO's Empty") };
    this.poReceivedInSystem = { ...this.generateSeedData("PO's Received In System") };

  }

  ngAfterViewInit(): any {}

  getRandomIntInclusive(min, max): any {
    min = Math.ceil(min);
    max = Math.floor(max);
    const a = Math.floor(Math.random() * (max - min + 1) + min).toString();
    const b = Math.floor(Math.random() * (max - min + 1) + min).toString();
    const c = Math.floor(Math.random() * (max - min + 1) + min).toString();
    const d = Math.floor(Math.random() * (max - min + 1) + min).toString();
    return a + b + c + d;
  }

  getRandomDate(min, max): any {
    min = Math.ceil(min);
    max = Math.floor(max);
    const a = Math.floor(Math.random() * (12 - min + 1) + min).toString();
    const b = Math.floor(Math.random() * (31 - min + 1) + min).toString();
    return a + '/' + b;
  }

  getRandomCTN(): any {
    const min = Math.ceil(10);
    const max = Math.floor(999);
    const a = Math.floor(Math.random() * (max - min + 1) + min).toString();
    return a;
  }

  getRandomIntInclusiveB(min, max): any {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min).toString();
  }

  generateSeedOrders(): any {
    const data = [];
    const categories = ['KT', 'HD', 'CK'];
    for (let i = 0; i < this.getRandomIntInclusiveB(2, 5); i++) {
      data.push({
        po: this.getRandomIntInclusive(10, 99),
        vendorId: 'GSTC',
        categories: categories[Math.floor(Math.random() * 3)],
        ctn: this.getRandomCTN(),
        orderDate: this.getRandomDate(1, 9),
        note: ['test']
        });
    }
    return data;
  }

  generateSeedData(title: string): any {
    const seed = {
      title,
      headers: ['PO#', 'Vendor ID', 'Categories', 'CTN', 'Order Date', 'Note'],
      data: this.generateSeedOrders()
    };
    return seed;
  }



}
