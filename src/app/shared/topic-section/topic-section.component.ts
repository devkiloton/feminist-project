import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-section',
  templateUrl: './topic-section.component.html',
  styleUrls: ['./topic-section.component.css']
})
export class TopicSectionComponent implements OnInit {

  constructor() { }
  @Input() title = "";
  ngOnInit(): void {
  }

}
