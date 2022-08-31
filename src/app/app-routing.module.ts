import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Attempt2RoutingModule } from './attempt2/attempt2-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { Attempt1RoutingModule } from './attempt1/attempt1-routing.module';

const routes: Routes = []; // sets up routes constant where you define your routes

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    Attempt1RoutingModule,
    Attempt2RoutingModule,
  ],
})
export class AppRoutingModule {}
