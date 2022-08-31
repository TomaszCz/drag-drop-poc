import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Attempt2RoutingModule } from './attempt2-routing.module';
import { Attempt2Component } from './attempt2/attempt2.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [Attempt2Component],
  imports: [
    DragDropModule,
    MatGridListModule,
    CommonModule,
    Attempt2RoutingModule,
  ],
})
export class Attempt2Module {}
