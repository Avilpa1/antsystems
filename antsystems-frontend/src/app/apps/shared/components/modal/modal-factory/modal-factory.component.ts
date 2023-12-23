import { Component, Inject, Injector, OnInit, TemplateRef, Type } from '@angular/core';
import {
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';
import { ModalComponent } from '../modal.component';
import { ModalService } from '../modal.service';
import { DOCUMENT } from '@angular/common';

export type Content<T> = string | TemplateRef<T> | Type<T>;

interface ModalParams {
  name?: string;
  height?: string;
  width?: string;
}

@Component({
  selector: 'app-modal-factory',
  template: ``,
  styleUrls: []
})
export class ModalFactoryComponent implements OnInit {
  componentRef: any;

  constructor(
    private viewContainer: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    public modalService: ModalService,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.modalService.create.subscribe((params: any) => {
      this.createModal(params.component, params.params);
    });
    this.modalService.destroy.subscribe(() => {
      this.removeModal();
    });
  }

  createModal(content: any, params: any): any {
    console.warn(params);
    const factory = this.resolver.resolveComponentFactory(ModalComponent);
    const ngContent = this.resolveNgContent(content);
    this.componentRef = this.viewContainer.createComponent(factory, 0, undefined, ngContent);

    // this.componentRef = factory.create(this.injector, ngContent);
    this.componentRef.instance.modalName = params?.name;
    this.componentRef.instance.modalWidth = params.width ? params?.width : '15rem';
    this.componentRef.instance.modalHeight = params?.height ? params.height : '15rem';

    this.componentRef.hostView.detectChanges();

    const { nativeElement } = this.componentRef.location;
    this.document.body.appendChild(nativeElement);


    // this.componentRef.instance.

    document.querySelector('body')!.style.overflowY = 'hidden';
    // document.querySelector<HTMLElement>('body > app-root > app-shell > app-header > div')!.style.paddingRight = 'calc(2rem + 17px)';
    // document.querySelector<HTMLElement>('body > app-root > app-shell > div > div')!.style.paddingRight = '17px';
  }

  removeModal(): any {
    this.componentRef.destroy();
    document.querySelector('body')!.style.overflowY = 'inherit';
    // document.querySelector<HTMLElement>('body > app-root > app-shell > app-header > div')!.style.paddingRight = '2rem';
    // document.querySelector<HTMLElement>('body > app-root > app-shell > div > div')!.style.paddingRight = 'inherit';
  }

  resolveNgContent<T>(content: Content<T>): any {
    if (typeof content === 'string') {
      const element = this.document.createTextNode(content);
      return [[element]];
    }

    if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView(null!);
      console.log(viewRef)
      // In earlier versions, you may need to add this line
      // this.appRef.attachView(viewRef);
      return [viewRef.rootNodes];
    }

    const factory = this.resolver.resolveComponentFactory(content);
    const componentRef = factory.create(this.injector);
    return [[componentRef.location.nativeElement], [this.document.createTextNode('Second ng-content')]];
  }

}
