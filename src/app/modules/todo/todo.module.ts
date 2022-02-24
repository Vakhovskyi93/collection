import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UiModule } from 'src/app/components/ui.module';

// Material
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';

import { TodoComponent } from './page/todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  }
];

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    DragDropModule,
    MatIconModule,
    RouterModule.forChild(routes),
    
    
  ]
})
export class TodoModule { }
