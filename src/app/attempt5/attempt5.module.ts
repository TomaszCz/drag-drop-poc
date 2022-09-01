import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Attempt5RoutingModule } from './attempt5-routing.module';
import { Attempt5Component } from './attempt5/attempt5.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [Attempt5Component],
  imports: [CommonModule, DragDropModule, Attempt5RoutingModule],
})
export class Attempt5Module {}
