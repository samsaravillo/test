import { Injectable } from '@angular/core';
import { TodoListService } from './enricher.service';
import { Todo } from './enricher.interfaces';

@Injectable()
export class TodoListPrivateService implements TodoListService {
  getTodos() {
    const todos: Todo[] = [
      {
        title: 'secret',
        description: 'All of my deepest, darkest secrets.',
        done: false
      }
    ];

    return todos;
  }
}