import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Attempt1RoutingModule } from './attempt1-routing.module';
import { Attempt1Component } from './attempt1/attempt1.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [Attempt1Component],
  imports: [CommonModule, DragDropModule, Attempt1RoutingModule],
})
export class Attempt1Module {}
