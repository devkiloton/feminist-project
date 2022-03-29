import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  mocks: any = require('../../../../Mocks/latest-posts-by-section.json');
  mocksMain: any = this.mocks.slice(0, 4+1)

  constructor() { }

  ngOnInit(): void {
  }
}
