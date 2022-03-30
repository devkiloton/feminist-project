import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {

  @Input() mocks = require('../../../Mocks/latest-posts-by-section.json');
  images = [this.mocks[0].image,this.mocks[1].image,this.mocks[2].image,this.mocks[3].image];
  titles = [this.mocks[0].title,this.mocks[1].title,this.mocks[2].title,this.mocks[3].title];
  constructor() { }

  ngOnInit(): void {
  }

}
