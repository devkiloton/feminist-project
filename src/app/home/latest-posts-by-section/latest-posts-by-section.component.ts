import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-posts-by-section',
  templateUrl: './latest-posts-by-section.component.html',
  styleUrls: ['./latest-posts-by-section.component.css']
})
export class LatestPostsBySectionComponent implements OnInit {

  mocks: any = require('../../../Mocks/latest-posts-by-section.json');
  constructor() { }
  @Input() section:string = '';
  ngOnInit(): void {
  }

}
