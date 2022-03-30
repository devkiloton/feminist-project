import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from 'src/app/app.module';
import { PageModule } from 'src/app/shared/page';
import { HomePageComponent } from '.';
import { LatestPostsBySectionModule } from 'src/app/shared/latest-posts-by-section/latest-posts-by-section.module';
import { LatestPostsModule } from 'src/app/shared/latest-posts/latest-posts.module';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    PageModule,
    LatestPostsBySectionModule,
    LatestPostsModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
