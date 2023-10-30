import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  purchase: boolean = true;
  suppliers: boolean = true;
  accountsPayable: boolean = true;
  masterCost: boolean = true;
  receiving: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
