import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Attempt3Component } from './attempt3/attempt3.component';

const routes: Routes = [
  {
    path: 'attempt3',
    component: Attempt3Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Attempt3RoutingModule {}
