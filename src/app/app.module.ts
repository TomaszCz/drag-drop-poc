import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { Attempt2Module } from './attempt2/attempt2.module';
import { RouterModule } from '@angular/router';
import { Attempt1Module } from './attempt1/attempt1.module';
import { Attempt3Module } from './attempt3/attempt3.module';
import { Attempt4Module } from './attempt4/attempt4.module';
import { Attempt5Module } from './attempt5/attempt5.module';
import { Attempt6Module } from './attempt6/attempt6.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,

    Attempt1Module,
    Attempt2Module,
    Attempt3Module,
    Attempt4Module,
    Attempt5Module,
    Attempt6Module,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
