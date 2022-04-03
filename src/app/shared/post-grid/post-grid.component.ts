import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-grid',
  templateUrl: './post-grid.component.html',
  styleUrls: ['./post-grid.component.css']
})
export class PostGridComponent implements OnInit {

  @Input() mocks = require('../../../Mocks/latest-posts-by-section.json');
  images = new Array(16);
  titles = new Array(16);
  constructor() { }
  
  ngOnInit(): void {
    for (let index = 0; index < 16; index++) {
      this.images[index] = this.mocks[index].image;
      this.titles[index] = this.mocks[index].title;
    }
  }

}
