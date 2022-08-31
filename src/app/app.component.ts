import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items = [
    {
      cols: 1,
      rows: 1,
      text: '1',
      color: 'red',
    },
    {
      cols: 1,
      rows: 1,
      text: '2',
      color: 'orange',
    },
    {
      cols: 1,
      rows: 1,
      text: '3',
      color: 'blue',
    },
    {
      cols: 1,
      rows: 1,
      text: '4',
      color: 'green',
    },
  ];

  ngOnInit() {
    setTimeout(() => {
      this.items = [
        {
          cols: 1,
          rows: 1,
          text: '1',
          color: 'red',
        },
        {
          cols: 1,
          rows: 1,
          text: '2',
          color: 'orange',
        },
        {
          cols: 1,
          rows: 1,
          text: '3',
          color: 'blue',
        },
        {
          cols: 1,
          rows: 1,
          text: '4',
          color: 'green',
        },
        {
          cols: 1,
          rows: 1,
          text: '5',
          color: 'pink',
        },
        {
          cols: 1,
          rows: 1,
          text: '6',
          color: 'yellow',
        },
      ];
    }, 3000);
  }

  dropListDropped(event: CdkDragDrop<any[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
