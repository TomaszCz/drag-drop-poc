import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempt6',
  templateUrl: './attempt6.component.html',
  styleUrls: ['./attempt6.component.scss'],
})
export class Attempt6Component implements OnInit {
  constructor() {}

  add() {
    this.items.push(this.items.length + 1);
  }

  shuffle() {
    this.items.sort(function () {
      return 0.5 - Math.random();
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      [11, 12, 13, 14, 15].forEach((element) => {
        this.items.push(element);
      });
    }, 5000);
  }

  items = Array(10)
    .fill('')
    .map((_, i) => i + 1);
  items2 = Array(10)
    .fill('')
    .map((_, i) => i + 1);

  drop(event: CdkDragDrop<number>): void {
    moveItemInArray(
      this.items,
      event.previousContainer.data,
      event.container.data
    );
  }
  drop2(event: CdkDragDrop<number>): void {
    moveItemInArray(
      this.items2,
      event.previousContainer.data,
      event.container.data
    );
  }
}
