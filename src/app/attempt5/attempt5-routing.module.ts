import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Attempt5Component } from './attempt5/attempt5.component';

const routes: Routes = [
  {
    path: 'attempt5',
    component: Attempt5Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Attempt5RoutingModule {}
