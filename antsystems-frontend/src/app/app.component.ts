import { Component } from '@angular/core';
import { devTools } from '@ngneat/elf-devtools';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'antsystems-frontend';
  constructor() {
    devTools();
    console.log(environment.production)
  }
}
