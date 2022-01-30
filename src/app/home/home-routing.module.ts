
import { LatestPostsBySectionComponent } from './latest-posts-by-section/latest-posts-by-section.component';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
      {
        path:'',
        component: HeaderComponent
      },
      {
        path:'',
        component: LatestPostsComponent
      },
      {
        path:'',
        component: LatestPostsBySectionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
