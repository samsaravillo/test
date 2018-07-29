import { Injectable } from '@angular/core';
import { TodoListService } from './enricher.service';
import { Todo } from './enricher.interfaces';

@Injectable()
export class TodoListPublicService implements TodoListService {
  getTodos() {
    const todos: Todo[] = [
      {
        title: 'get groceries',
        description: 'eggs, milk, etc.',
        done: false
      },
      {
        title: 'get groceries2',
        description: 'eggs2, milk2, etc.2',
        done: false
      }
    ];

    return todos;
  }



}