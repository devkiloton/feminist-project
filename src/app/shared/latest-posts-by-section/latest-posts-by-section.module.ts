import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestPostsBySectionComponent } from './latest-posts-by-section.component';
import { NgImageSliderModule } from 'ng-image-slider';



@NgModule({
  declarations: [
    LatestPostsBySectionComponent
  ],
  imports: [
    CommonModule,
    NgImageSliderModule
  ],
  exports: [
    LatestPostsBySectionComponent
  ]
})
export class LatestPostsBySectionModule { }
