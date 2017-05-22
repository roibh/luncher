import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdInputModule, MdCardModule, MdButtonModule, MdCheckboxModule, MdSidenavModule, MdGridListModule } from '@angular/material';

@NgModule({
  imports: [
    MdInputModule,
    MdCardModule,
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdGridListModule
  ],
  exports: [
    MdInputModule,
    MdCardModule,
    MdButtonModule,
    MdCheckboxModule,
    MdSidenavModule,
    MdGridListModule
  ],
})


export class MaterialModule { }
