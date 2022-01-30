import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LatestPostsService } from './latest-posts.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.scss']
})
export class LatestPostsComponent implements OnInit {
  constructor( private latestPostsService: LatestPostsService) { }
  posts:{src:string}[] = this.latestPostsService.posts;

  ngOnInit(): void {
    setInterval(() => {this.onNextClick()}, 8000);
  }

  currentSlide = 0;

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.posts.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.posts.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}
