import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPostsBySectionComponent } from './latest-posts-by-section.component';

describe('LatestPostsBySectionComponent', () => {
  let component: LatestPostsBySectionComponent;
  let fixture: ComponentFixture<LatestPostsBySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestPostsBySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestPostsBySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
