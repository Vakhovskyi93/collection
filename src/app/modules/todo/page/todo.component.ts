import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  inProgress = ['Pick up groceries'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    // this.todoService.todo.subscribe(
    //   data => { console.log(data);
    //   }
    // )
  }

  drop(event: CdkDragDrop<string[]>) {
    this.todoService.drop(event)
     
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
     
    
  }

  removeItem(item:string){
    console.log(item, 'remove');
    

  }

  editItem(item:string){
    console.log(item, 'edit');
    

  }
}
