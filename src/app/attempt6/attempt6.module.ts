import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Attempt6RoutingModule } from './attempt6-routing.module';
import { Attempt6Component } from './attempt6/attempt6.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [Attempt6Component],
  imports: [
    CommonModule,
    DragDropModule,
    FlexModule,
    MatCardModule,
    Attempt6RoutingModule,
  ],
})
export class Attempt6Module {}
