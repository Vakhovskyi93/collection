import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Modules
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

// Components
import { ButtonComponent } from './button/button.component';



const materialModules = [
  MatButtonModule,
  MatToolbarModule
];


const components = [ 
  ButtonComponent
  
 ]


@NgModule({
  declarations: [ ...components ],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [ ...components ]
})
export class UiModule { }
