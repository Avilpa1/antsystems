import { ComponentType } from '@angular/cdk/portal';
import { AfterContentInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MdbModalService, MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'ant-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements AfterContentInit {
  @Input() data!: any;
  @Input() groupName!: FormGroup;
  @Input() controlName: any;
  @Input() prev: string = '';
  @Input() next: string = '';
  @Input() subGroupName?: string
  @Input() current!: string
  @Input() filter: boolean = false;
  @Input() placeholder = 'Please Select'
  @Input() field: string = 'name';
  @Input() label: string | null = null;
  @Input() valueChangedAlert: boolean = false;

  @Output() selectChangedEvent = new EventEmitter();
  
  prevValue: any;
  modalRef: MdbModalRef<any> | null = null;
  modalConfig = {
    animation: true,
    backdrop: true,
    containerClass: 'right',
    data: {
      title: 'Warning!',
      prev: '',
      new: ''
    },
    ignoreBackdropClick: false,
    modalClass: 'modal-dialog-centered',
  }

  constructor(private modalService: MdbModalService) {}

  ngAfterContentInit(): void {
    this.prevValue = this.controlName.value;
  }
  skip: boolean = false;
  selectChanged(event: Event) {
    if (this.valueChangedAlert && this.prevValue != null && this.prevValue !== this.controlName.value) {
      if(this.controlName.value) {
      // fires if there is an exisiting value set
        this.modalConfig.data.prev = this.prevValue;
        this.modalConfig.data.new = this.controlName.value;
        this.modalRef = this.modalService.open(SelectValueChangedComponent, this.modalConfig);
        this.modalRef.onClose.subscribe((value: any) => {
          if (value) {
            // Confirm
            this.skip = false;
            this.setValue(event)
          } else {
            // Cancel
            this.skip = true;
            this.controlName.setValue(this.prevValue, {emitEvent: false, onlySelf: true})
            // this.prevValue = null
          }
        });        
      } else {
      // fires if no value is set
        this.prevValue = null;
        this.resetChildren();
      }
    } else {
      this.prevValue = this.controlName.value;
      this.setValue(event);
    }
  }

  setValue(event: Event) {
    this.selectChangedEvent.next(event);
    this.resetChildren();
  }

  resetChildren() {
    if(this.skip) return
    const control = this.groupName.get(`${this.subGroupName}.${this.next}`)
    control?.reset()
  }

  compareFn(c1: any, c2: any): boolean { 
    return c1 && c2 &&( c1.id === c2.id || c2 === c1.id);
 }

}

@Component({
  selector: 'app-value-changed',
  templateUrl: './select-value-changed.component.html',
})
export class SelectValueChangedComponent {
  title: string | null = null;
  prev: any | null = null;
  new: any | null = null;
  
  constructor(public modalRef: MdbModalRef<SelectValueChangedComponent>) {}
  
  close(value: any): void {
    this.modalRef.close(value)
  }

  confirm(value: any): void {
    this.modalRef.close(value)
  }
}