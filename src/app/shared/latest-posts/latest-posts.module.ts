import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestPostsComponent } from './latest-posts.component';



@NgModule({
  declarations: [
    LatestPostsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LatestPostsComponent
  ]
})
export class LatestPostsModule { }
