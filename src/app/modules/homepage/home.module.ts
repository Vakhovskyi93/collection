import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from 'src/app/components/ui.module';

import { HomepageComponent } from './page/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild(routes),
   
  ]
})
export class HomeModule { }
