import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicSectionComponent } from './topic-section.component';
import { PostGridModule } from '../post-grid/post-grid.module';



@NgModule({
  declarations: [
    TopicSectionComponent
  ],
  imports: [
    CommonModule,
    PostGridModule
  ],
  exports: [
    TopicSectionComponent
  ]
})
export class TopicSectionModule { }
