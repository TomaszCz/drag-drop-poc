import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Attempt3RoutingModule } from './attempt3-routing.module';
import { Attempt3Component } from './attempt3/attempt3.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [Attempt3Component],
  imports: [CommonModule, DragDropModule, Attempt3RoutingModule],
})
export class Attempt3Module {}
