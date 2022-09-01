import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { Attempt4Component } from './attempt4/attempt4.component';

const routes: Routes = [
  {
    path: 'attempt4',
    component: Attempt4Component,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule],
})
export class Attempt4RoutingModule {}
