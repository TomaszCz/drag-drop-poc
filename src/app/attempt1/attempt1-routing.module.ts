import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Attempt1Component } from './attempt1/attempt1.component';

const routes: Routes = [
  {
    path: 'attempt1',
    component: Attempt1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Attempt1RoutingModule {}
