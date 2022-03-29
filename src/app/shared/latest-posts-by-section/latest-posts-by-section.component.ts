import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-latest-posts-by-section',
  template:`
  <p 
    style =
      "color: var(--text-primary-color);
      background-color: var(--bg-text-primary-color);
      width: min-content;
      padding: 8px;
      font-size: 1.75rem;
      border-radius: 10px;
      margin: 25px 0 10px 0
      "
  >
    {{sectionTitle}}
  </p>
  <ng-image-slider
  [images]="imageObject" 
  [imagePopup]="false" 
  (imageClick)="redirect()" 
  #nav>
  </ng-image-slider>
  ` 
})
export class LatestPostsBySectionComponent{

  @ViewChild('nav') slider!: NgImageSliderComponent;
  @Input() imageObject: Array<postCard> = [];
  @Input() sectionTitle = "Default text";

  redirect(){
    const imgIndex = this.slider.activeImageIndex;
    const link = this.imageObject[imgIndex].thumbImage;

  }

}

export interface postCard {
  image: string;
  thumbImage: string;
  alt: string;
  title: string;
}