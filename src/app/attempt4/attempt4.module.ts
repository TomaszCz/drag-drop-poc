import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Attempt4RoutingModule } from './attempt4-routing.module';
import { Attempt4Component } from './attempt4/attempt4.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [Attempt4Component],
  imports: [
    CommonModule,
    DragDropModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    Attempt4RoutingModule,
  ],
})
export class Attempt4Module {}
