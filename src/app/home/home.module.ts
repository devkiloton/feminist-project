import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { HomePageModule } from './pages/home-page/home-page.module';

@NgModule({
  declarations: [
  ],
  imports: [CommonModule, HomePageModule, RouterModule.forChild([{path:'', component: HomePageComponent }])],
  exports: [
  ]
})
export class HomeModule { }
