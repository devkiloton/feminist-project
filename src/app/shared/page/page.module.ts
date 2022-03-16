import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { HeaderModule } from '../header';
import { FooterModule } from '../footer';



@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  exports: [PageComponent]
})
export class PageModule { }
