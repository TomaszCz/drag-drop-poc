import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Attempt2Component } from './attempt2/attempt2.component';

const routes: Routes = [
  {
    path: 'attempt2',
    component: Attempt2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Attempt2RoutingModule {}
