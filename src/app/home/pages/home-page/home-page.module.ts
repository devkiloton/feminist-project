import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from 'src/app/app.module';
import { PageModule } from 'src/app/shared/page';
import { HomePageComponent } from '.';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    PageModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
