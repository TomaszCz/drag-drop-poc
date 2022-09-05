import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Attempt6Component } from './attempt6/attempt6.component';

const routes: Routes = [{
  path: 'attempt6',
  component: Attempt6Component,
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Attempt6RoutingModule { }
