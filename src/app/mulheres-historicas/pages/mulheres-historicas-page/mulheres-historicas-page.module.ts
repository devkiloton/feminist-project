import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MulheresHistoricasPageComponent } from './mulheres-historicas-page.component';
import { PageModule } from 'src/app/shared/page';
import { TopicSectionModule } from 'src/app/shared/topic-section/topic-section.module';
import { LatestPostsModule } from 'src/app/shared/latest-posts/latest-posts.module';
import { PostGridModule } from 'src/app/shared/post-grid/post-grid.module';



@NgModule({
  declarations: [
    MulheresHistoricasPageComponent
  ],
  imports: [
    CommonModule, 
    PageModule,
    TopicSectionModule,
    LatestPostsModule,
    PostGridModule
  ],
  exports: [
    MulheresHistoricasPageComponent
  ]
})
export class MulheresHistoricasPageModule { }
