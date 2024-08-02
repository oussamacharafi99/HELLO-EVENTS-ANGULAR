import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatTableModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatTableModule
  ]
})
export class MaterialeModule { }
