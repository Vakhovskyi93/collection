import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from 'src/app/repository/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // todoList: Todo[] = [
  //   {
  //     text: 'Get to work',
  //     user: 'Adam',
  //     date: '24.03.2022'
  //   }
  // ];

  // inProgress: Todo[] = [
  //   {
  //     text: 'Pick up groceries',
  //     user: 'Adam',
  //     date: '24.03.2022'
  //   }
  // ];

  // done: Todo[] = [
  //   {
  //     text: 'Get up',
  //     user: 'Adam',
  //     date: '24.03.2022'
  //   }
  // ];


  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  inProgress = ['Pick up groceries'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];



    //  todo: BehaviorSubject<Todo[]> = new BehaviorSubject(this.todoList);
    //  todoProgress: BehaviorSubject<Todo[]> = new BehaviorSubject(this.inProgress);
    //  todoDone: BehaviorSubject<Todo[]> = new BehaviorSubject(this.done);

  constructor() {
    
   }

  drop(event: CdkDragDrop<string[]>){
    console.log('drop', event);
    console.log('before',this.todo, this.inProgress, this.done);
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
    console.log('after',this.todo, this.inProgress, this.done);
  }
}
