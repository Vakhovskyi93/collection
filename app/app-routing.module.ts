import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './modules/homepage/home.module'

const routes: Routes = [
  { path: '',  loadChildren: () => import('./modules/homepage/home.module').then(m => m.HomeModule)},
  { path: 'todolist', loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
