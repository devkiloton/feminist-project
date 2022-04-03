import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostGridComponent } from './post-grid.component';



@NgModule({
  declarations: [
    PostGridComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostGridComponent
  ]
})
export class PostGridModule { }
