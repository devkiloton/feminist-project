import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MulheresHistoricasPageComponent } from './pages/mulheres-historicas-page/mulheres-historicas-page.component';
import { RouterModule } from '@angular/router';
import { MulheresHistoricasPageModule } from './pages';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, MulheresHistoricasPageModule, RouterModule.forChild([{path:'', component: MulheresHistoricasPageComponent }])
  ],
  exports: []
})
export class MulheresHistoricasModule { }
