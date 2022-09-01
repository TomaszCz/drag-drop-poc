import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  ViewChild,
} from '@angular/core';

import {
  CdkDrag,
  CdkDragEnter,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-attempt3',
  templateUrl: './attempt3.component.html',
  styleUrls: ['./attempt3.component.scss'],
})
export class Attempt3Component implements AfterViewInit {
  @ViewChild(CdkDropListGroup) listGroup: CdkDropListGroup<CdkDropList>;
  @ViewChild('listGroup') listGroupElRef: ElementRef;
  @ViewChild(CdkDropList) placeholder: CdkDropList;
  @ViewChild('dragPlaceholder') dragPlaceholderElRef: ElementRef;

  public items: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public itemSizes: Array<string> = [
    'content-item-c11 1',
    'content-item-c11 2',
    'content-item-c11 3',
    'content-item-c11 4',
    'content-item-c11 5',
    'content-item-c11 6',
    'content-item-c11 7',
    'content-item-c11 8',
    'content-item-c11 9',
    'content-item-c11 10',
  ];

  public target: CdkDropList | null;
  public targetIndex: number;
  public source: CdkDropList | null;
  public sourceIndex: number;

  ngAfterViewInit() {
    let phElement = this.placeholder.element.nativeElement;

    phElement.style.display = 'none';
    phElement.parentNode!.removeChild(phElement);
  }

  add() {
    this.items.push(this.items.length + 1);
  }

  shuffle() {
    this.items.sort(function () {
      return 0.5 - Math.random();
    });
  }

  dropped() {
    if (!this.target) return;

    const parent: HTMLElement = this.listGroupElRef.nativeElement;
    const phElement: HTMLElement = this.placeholder.element.nativeElement;
    const phElementIndex = _indexOf(parent.children, phElement);

    phElement.style.display = 'none';
    parent.removeChild(phElement);
    parent.appendChild(phElement);

    parent.insertBefore(
      this.source!.element.nativeElement,
      parent.children[this.sourceIndex]
    );

    console.log(this.sourceIndex, ' => ', phElementIndex);

    if (this.sourceIndex != phElementIndex) {
      moveItemInArray(this.items, this.sourceIndex, phElementIndex);
    }

    this.target = null;
    this.targetIndex = NaN;
    this.source = null;
    this.sourceIndex = NaN;
  }

  entered({ container, item }: CdkDragEnter) {
    const phElement: HTMLElement = this.placeholder.element.nativeElement;
    const dropElement: HTMLElement = container.element.nativeElement;
    const prevTarget: CdkDropList | null = this.target;
    const prevTargetIndex: number = this.targetIndex;
    this.target = container;

    const dropElementIsTheSource: boolean = !dropElement.parentNode;
    const prevAndCurrentTargetAreTheSame: boolean = this.target === prevTarget;
    if (dropElementIsTheSource || prevAndCurrentTargetAreTheSame) {
      return;
    }

    this.targetIndex = _indexOf(dropElement.parentNode!.children, dropElement);

    if (!this.source) {
      this.source = item.dropContainer;
      this.sourceIndex = _indexOf(
        dropElement.parentNode!.children,
        item.dropContainer.element.nativeElement
      );
      const sourceElement: HTMLElement = this.source.element.nativeElement;

      this.fixPhElementStyling(phElement, sourceElement);

      sourceElement.parentNode!.removeChild(sourceElement);
    }

    const index: number = prevTargetIndex ?? this.sourceIndex;
    const insertAfter: boolean = index < this.targetIndex;

    this.listGroupElRef.nativeElement.insertBefore(
      phElement,
      insertAfter ? dropElement.nextSibling : dropElement
    );
  }

  dragReleased() {
    const phElementPositionWasChanged: boolean = !!this.source;
    if (phElementPositionWasChanged) {
      this.dragPlaceholderElRef.nativeElement.style.transform = 'none';
      this.dragPlaceholderElRef.nativeElement.parentNode.removeChild(
        this.dragPlaceholderElRef.nativeElement
      );
      this.placeholder.element.nativeElement.appendChild(
        this.dragPlaceholderElRef.nativeElement
      );
    }
  }

  private fixPhElementStyling(
    phElement: HTMLElement,
    sourceElement: HTMLElement
  ) {
    phElement.style.width = sourceElement.clientWidth - 6 + 'px';
    phElement.style.height = sourceElement.clientHeight - 6 + 'px';

    const size = Array.from(sourceElement.classList).find((c) =>
      c.startsWith('content-item-c')
    );

    phElement.style.display = '';
    const oldSize = Array.from(phElement.classList).find((c) =>
      c.startsWith('content-item-c')
    );
    if (oldSize) {
      phElement.classList.remove(oldSize);
    }
    if (size) {
      phElement.classList.add(size);
    }
  }
}

function _indexOf(collection: any, node: any) {
  return Array.prototype.indexOf.call(collection, node);
}
