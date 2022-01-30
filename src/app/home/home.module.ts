import { PostComponent } from './latest-posts-by-section/post/post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header/header.component';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { LatestPostsBySectionComponent } from './latest-posts-by-section/latest-posts-by-section.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    LatestPostsComponent,
    LatestPostsBySectionComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
