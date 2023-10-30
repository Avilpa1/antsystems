import { Component, OnInit } from '@angular/core';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentDateTime: any;
  chinaTime: any;
  turkeyTime: any;
  newYorkTime: any;

  constructor() {
    dayjs.extend(utc);
    dayjs.extend(timezone);
  }

  ngOnInit(): void {
    this.getTime();
  }

  getTime(): any {
    setInterval(() => {
      this.currentDateTime = dayjs().format('MMMM D, YYYY, dd h:mm:ss A');
      this.newYorkTime = dayjs().tz('America/New_York').format('h:mm:ss A');
      this.turkeyTime = dayjs().tz('Europe/Istanbul').format('h:mm:ss A');
      this.chinaTime = dayjs().tz('Asia/Shanghai').format('h:mm:ss A');
    }, 1000);
  }

}
