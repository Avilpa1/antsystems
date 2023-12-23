import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface ModalParams {
  name?: string;
  height?: string;
  width?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public create: Subject<any> = new Subject();
  public destroy: Subject<any> = new Subject();

  constructor() { }

  open(component: any, params?: ModalParams): any {
    this.create.next({component, params});
  }

  close(): any {
    this.destroy.next(null);
  }
}
