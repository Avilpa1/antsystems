import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ModalService } from './modal.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {
  @Input() modalName!: string;
  @Input() modalHeight = '15rem';
  @Input() modalWidth = '15rem';

  constructor(private elementRef: ElementRef, public modalService: ModalService) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.setProperty('--modal-height', this.modalHeight);
    this.elementRef.nativeElement.style.setProperty('--modal-width', this.modalWidth);
  }

  ngAfterViewInit(): any {}

}
